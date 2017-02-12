<section class="content dailymenu subscribe">
  <h1>Feliratkozás napi menü értesítőre</h1>
  <p class="subtitle">Add meg neved és pontos email-címed és azt, hogy melyik Fruccola menüjét látnád szívesen, minden nap az inboxodban.</p>

  <form action="http://fruccola.hu/admin/api/add-newsletter-subscriber" method="post" role="form" id="subscribe">

        <label for="surname" class="col-sm-2 control-label">Vezetéknév:
        <input type="text" class="form-control" id="surname" name="surname" value="">
        </label>

        <label for="firstname" class="col-sm-2 control-label">Keresztnév:
        <input type="text" class="form-control" id="firstname" name="firstname" value="">
        </label>

        <label for="email" class="col-sm-2 control-label">Email címed:
        <input type="email" class="form-control" id="email" name="email" value="">
        </label>


        <label for="place_id_2" class="checkbox">
            <input type="checkbox" id="place_id_2" name="places[]" value="2" checked>
            <span>Kérem az Kristóf téri napimenü értesítőt.</span>
        </label>
        <label for="place_id_1" class="checkbox">
            <input type="checkbox" id="place_id_1" name="places[]" value="1" checked>
            <span>Kérem az Arany János utcai napimenü értesítőt.</span>
        </label>
    
        <input type="hidden" name="language" value="hu" />
        <input type="hidden" name="created_by" value="menu-webform-1.2-hu" />
        <input type="hidden" name="create" value="create" />
        <p class="message"></p>
        <button type="submit">Feliratkozom</button>
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
                        },
                        error: function(data) { // if error occured

                        }
                    });
                    return false;
                });
            })();

        </script>
  </form>
</section>