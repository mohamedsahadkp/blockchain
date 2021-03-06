(function($){
    function processForm( e ){
        $.ajax({
            url: 'https://www.demo.com/api/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify( { "name": $('#name').val(), "email": $('#email').val(), "message": $('#message').val() } ),
            processData: false,
            success: function( data, textStatus, jQxhr ){
                $('#response').html( JSON.stringify( data ) );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#contact-form').submit(processForm);
})(jQuery);


