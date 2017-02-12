<article class="content ">
    <h1>Leiratkozás menü értesítőről</h1>
    <p>Kérjük add meg az email címet, amire nem akarsz már fruccola menü értesítőt kapni:</p>
    <form action="http://fruccola.hu/admin/api/delete-newsletter-subscriber" method="post" role="form" id="unsubscribe">

        <label for="email" class="col-sm-2 control-label">Email:
            <input type="email" class="form-control" id="email" name="email" value="">
        </label>

        <p class="message"></p>

        <input type="hidden" name="delete" value="delete" />
        <button type="submit">Leliratkozom</button>

        <script>
            (function() {
                $('#unsubscribe').submit(function(e) {
                    var data = $('#unsubscribe').serialize(); // serialize all the data in the form
                    $.ajax({
                        url: $('#unsubscribe').attr('action'), // php script to retern json encoded string
                        data: data,  // serialized data to send on server
                        dataType:'json', // set recieving type - JSON in case of a question
                        type:'POST', // set sending HTTP Request type
                        success: function(data) { // callback method for further manipulations
                            $('#unsubscribe .message').html(data.message);
                            $('#unsubscribe .message').show();
                            $('#unsubscribe button').hide();
                        },
                        error: function(data) { // if error occured

                        }
                    });
                    return false;
                });
            })();

        </script>

        <script>
            (function() {
                $.urlParam = function(name){
                    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                    if (results==null){
                        return null;
                    }
                    else{
                        return results[1] || 0;
                    }
                }
                $("#email").val($.urlParam('email'));
            })();
        </script>

    </form>
</article>