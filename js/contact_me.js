$(function() {
    var submitBtn = $("#btnSubmit");
    $("input, textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            submitBtn.attr("disabled", true);
            event.preventDefault();
            
            // get values from FORM
           
            var flashSuccess    = $('#success');
            var contactForm     = $('#contactForm');            
            var name            = $("input#name").val();
            var formData        = contactForm.serialize();

            $.ajax({
                url: "mail/contact_me.php",
                type: "POST",
                data: formData,
                cache: false,
                success: function() {
                    // Enable button & show success message
                    submitBtn.attr("disabled", false);
                    flashSuccess.html("<div class='alert alert-success'>");
                    flashSuccess.children('.alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    flashSuccess.children('.alert-success').append("<strong>Your message has been sent. </strong>");
                    flashSuccess.children('.alert-success').append('</div>');
						
                    //clear all fields
                    contactForm.trigger("reset");
                },
                error: function() {
                    // Fail message
                    flashSuccess.html("<div class='alert alert-danger'>");
                    flashSuccess.children('.alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    flashSuccess.children('.alert-danger').append("<strong>Sorry " + name + ", it seems that my mail server is not responding. Please try again later!");
                    flashSuccess.children('.alert-danger').append('</div>');
                   
                    //clear all fields
                    contactForm.trigger("reset");
                },
            })
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

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});
