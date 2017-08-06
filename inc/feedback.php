<section class="content dailymenu subscribe">
    <h1>Tell us what you think</h1>
    <p class="subtitle">Tell us what you like in Fruccola, and how we could be any better!</p>

    <form action="http://fruccola.hu/admin/api/feedback" method="post" role="form" id="subscribe">

        <label for="firstname" class="col-sm-2 control-label">What is your first name?
            <input type="text" class="form-control" id="firstname" name="firstname" value="">
        </label>

        <label for="email" class="col-sm-2 control-label">Your email address:
            <input type="email" class="form-control" id="email" name="email" value="">
        </label>

        <label for="message" class="col-sm-2 control-label">Your thoughts:
            <textarea class="form-control" id="message" name="message" ></textarea>
        </label>

        <p>Which Fruccola do you visit?</p>

        <label for="place_id_1" class="checkbox">
            <input type="checkbox" id="place_id_1" name="places[]" value="1">
            <span>Arany János street</span>
        </label>
        <label for="place_id_2" class="checkbox">
            <input type="checkbox" id="place_id_2" name="places[]" value="2">
            <span>Kristóf square</span>
        </label>
        <label for="place_id_3" class="checkbox">
            <input type="checkbox" id="place_id_3" name="places[]" value="3">
            <span>MOM park</span>
        </label>

        <input type="hidden" name="language" value="hu" />
        <input type="hidden" name="created_by" value="feedback-webform-1.2-hu" />
        <input type="hidden" name="create" value="create" />
        <p class="message"></p>
        <button type="submit">Submit your opinion</button>
        <script>
            (function() {
                $('#subscribe').submit(function(e) {
                    var data = $('#subscribe').serialize(); // serialize all the data in the form
                    $.ajax({
                        url: $('#subscribe').attr('action'), // php script to retern json encoded string
                        data: data,  // serialized data to send on server
                        dataType:'json', // set recieving type - JSON in case of a question
                        type:'POST', // set sending HTTP Request type
                        success: function(data) { // callback method for further manipulations
                            $('#subscribe .message').html(data.message);
                            $('#subscribe .message').show();
                            if (data.rc == 1) $('#subscribe button').hide();
                        },
                        error: function(data) { // if error occured

                        }
                    });
                    return false;
                });
            })();

        </script>
    </form>
    <p><br/></p>

</section>
</main>