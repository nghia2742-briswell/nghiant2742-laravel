<?php

namespace App\Utils;

use Symfony\Component\Yaml\Yaml;

class MessageUtil
{
    /**
     * Get message from YAML file based on error code.
     *
     * @param string $errorCode
     * @return string|null
     */
    public static function getMessage($errorCode, $params = [])
    {
        // Read the content from the YAML file
        $yamlPath = file_get_contents(config_path('constants/messages.yml'));
        $yamlContents = Yaml::parse($yamlPath);
        
        // Check if the error code exists in the YAML content
        if (isset($yamlContents['errors'][$errorCode])) {
            // Get the message from YAML
            $message = $yamlContents['errors'][$errorCode];
            
            // Replace parameters in the message
            foreach ($params as $index => $param) {
                $message = str_replace("{{$index}}", $param, $message);
            }
            
            return $message;
        }
        
        return null; // Return null if the error code is not found
    }
}
