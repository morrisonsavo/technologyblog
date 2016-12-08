// Contact Form Scripts

$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var nombre =        $("input#nombre").val();
            var apellidos =     $("input#apellidos").val();
            var profesion =     $("input#profesion").val();
            var pais =          $("input#pais").val();
            var comentario =    $("textarea#comentario").val(); 
            var fecha = new Date();
            // Check for white space in name for Success/Fail message
            if (nombre.indexOf(' ') >= 0) {
                nombre = nombre.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "http://localhost:8080/invitados",
                type: "POST",
                datatype: 'application/json',
                data: {
                    nombre: nombre,
                    apellidos: apellidos,
                    profesion: profesion,
                    pais: pais,
                    comentario: comentario,
                    fecha: fecha
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                        
                        window.location.assign("http://localhost:8080/")


                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + nombre + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#nombre').focus(function() {
    $('#success').html('');
});

