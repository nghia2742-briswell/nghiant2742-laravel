import { getMsgError } from "../common";

$(document).ready(function () {
    $("#userSearchForm").validate({
        rules: {
            email: {
                email: true,
            },
            fullname: {
            },
            phone: {
                number: true
            },
        },
        messages: {
            email: {
                email: getMsgError('errors', 'E004'),
            },  
            phone: {
                number: getMsgError('errors', 'E012', 'Phone', 'number'),
            },    
        },
        invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {                    
                validator.errorList[0].element.focus();
            }
        },
        submitHandler: function(form) {
            var $form = $(form);
            $('.btnSubmit').html('<span class="loader"></span>Search')
            $('.btnSubmit').attr('disabled', true)

            $form.find('input').filter(function() {
                return !this.value;
            }).prop('disabled', true);
            
            $form.submit();
        } 
    });

    $("#paginationForm button").click(function(e) {
        e.preventDefault();
        let page = $(this).data("page");
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.append('page', page);
        let queryToString = queryParams.toString();
        window.location.href = window.location.pathname + '?' + queryToString;
    });
})