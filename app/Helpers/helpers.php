<?php

use App\Utils\ConstUtil;

/**
 * Write code on Method
 *
 * @return response()
 */
if (! function_exists('parseRole')) {
    function parseRole($user_flg)
    {
        return ConstUtil::getContentYml('users','user_flg', $user_flg);
    }
}