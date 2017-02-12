<section class="content dailymenu subscribe">
    <h1>Get daily menu notification</h1>
    <p class="subtitle">Learn our daily menu on time, subscribe to our daily notification.</p>

    <form id="filter" class="product-filter">
        <a class="mobile-filter open" href="#filter"></a>
        <a class="mobile-filter close" href="#top"></a>

        <fieldset class="items">
            <label for="filter-flourfree" class="flourfree">
                <input type="checkbox" id="filter-flourfree" name="flourfree">
                <span>flour-free</span>
            </label>
            <br>

            <label for="filter-lactosefree" class="lactosefree">
                <input type="checkbox" id="filter-lactosefree" name="lactosefree">
                <span>lactose-free</span>
            </label>
            <br>

            <label for="filter-vegetarian" class="vegetarian">
                <input type="checkbox" id="filter-vegetarian" name="vegetarian">
                <span>vegetarian</span>
            </label>
            <br>

            <label for="filter-vegan" class="vegan">
                <input type="checkbox" id="filter-vegan" name="vegan">
                <span>vegan</span>
            </label>
            <br>

            <label for="filter-arany" class="address arany">
                <input type="checkbox" id="filter-arany" name="arany" checked>
                <span>Arany János utca</span>
            </label>
            <br>

            <label for="filter-kristof" class="address kristof">
                <input type="checkbox" id="filter-kristof" name="kristof" checked>
                <span>Kristóf tér</span>
            </label>
            <br>
        </fieldset>
    </form>



    <form action="http://fruccola.hu/admin/api/add-newsletter-subscriber" method="post" role="form" id="subscribe">

        <p>Please enter your email address and specify which Fruccola should send menu notifications to your inbox.</p>

        <label for="firstname" class="col-sm-2 control-label">First name:
            <input type="text" class="form-control" id="firstname" name="firstname" value="">
        </label>

        <label for="surname" class="col-sm-2 control-label">Surname:
            <input type="text" class="form-control" id="surname" name="surname" value="">
        </label>

        <label for="email" class="col-sm-2 control-label">Email address:
            <input type="email" class="form-control" id="email" name="email" value="">
        </label>

        <label for="place_id_1" class="checkbox">
            <input type="checkbox" id="place_id_1" name="places[]" value="1" checked>
            <span>Send me the menu of fruccola Arany János street.</span>
        </label>
        <label for="place_id_2" class="checkbox">
            <input type="checkbox" id="place_id_2" name="places[]" value="2" checked>
            <span>Send me the menu of fruccola Kristóf square.</span>
        </label>

        <input type="hidden" name="language" value="en" />
        <input type="hidden" name="created_by" value="menu-webform-1.2-en" />
        <input type="hidden" name="create" value="create" />
        <p class="message"></p>
        <button type="submit">Subscribe</button>
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