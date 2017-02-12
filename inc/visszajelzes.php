<section class="content aboutus">

    <h1>Mit gondolsz rólunk?</h1>
  
    <p>Add meg keresztneved valamint email címed, és mondd el nekünk, mit szeretsz a Fruccolában és hogyan lehetnénk még jobbak.</p>


    <form action="http://fruccola.hu/admin/api/feedback" method="post" role="form" id="subscribe">

        <label for="firstname" class="col-sm-2 control-label">Hogyan szólíthatunk:
            <input type="text" class="form-control" id="firstname" name="firstname" value="">
        </label>

        <label for="email" class="col-sm-2 control-label">Email címed:
            <input type="email" class="form-control" id="email" name="email" value="">
        </label>

        <label for="message" class="col-sm-2 control-label">Gondolataid:
            <textarea class="form-control" id="message" name="message" ></textarea>
        </label>

        <p>Melyik Fruccolába szoktál járni?</p>
        <label for="place_id_2" class="checkbox">
            <input type="checkbox" id="place_id_2" name="places[]" value="2">
            <span>Kristóf téri</span>
        </label>
        <label for="place_id_1" class="checkbox">
            <input type="checkbox" id="place_id_1" name="places[]" value="1">
            <span>Arany János utcai</span>
        </label>


        <input type="hidden" name="language" value="hu" />
        <input type="hidden" name="created_by" value="feedback-webform-1.2-hu" />
        <input type="hidden" name="create" value="create" />
        <p class="message"></p>
        <button type="submit">Beküldöm a véleményem</button>
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