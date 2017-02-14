<section class="content menu categories">
    <h1><?php echo $config['GET '.$url['path']]['title']?></h1>
    <ul class="menu-categories">
      <script>
        (function() {
            var fruccolaAPI = "http://fruccola.hu/admin/api/menu/categories";
            $.getJSON( fruccolaAPI ).done(function( data ) {
                $.each(data, function(index, value){

                  item = $('<li></li>');
                  item.addClass(data[index]['name_class'].replace(',',''));

                  a = $('<a>' + data[index]["name_"+language] + '</a>');
                  a.attr('href','<?php echo $url['path'];?>/' + data[index]['slug_'+language]);
                  item.append(a);

                  $('.menu-categories').append(item);
                });
            });
        })();
      </script>
    </ul>
</section>

<?php if ($language === 'en') { ?>
<section class="content menu payment-methods">
    <h2>Payment methods</h2>
    <p>
        With the exception of American Express, <br/>all other credit cards are accepted.
    </p>
    <ul>
      <li class="icon-pay-mastercard">Mastercard</li>
      <li class="icon-pay-visa">Visa</li>
      <li class="icon-pay-szechenyi">SZÉPkártya (OTP, MKB, K&H)</li>
      <li class="icon-pay-ticket">Ticket restaurant, Ticket compliments</li>
      <li class="icon-pay-erzsebet">Erzsébetutalvány, Erzsébetkártya</li>
    </ul>
</section>
<section class="content menu allergenes">
    <h2>
      Allergens:
      <em class="flourfree" title="Flour free">Flour free</em>
      <em class="lactosefree" title="Lactose free">Lactose free</em>
      <em class="vegetarian" title="Vegetarian">Vegetarian</em>
      <em class="vegan" title="Vegan">Vegan</em>
    </h2>
    <p>
        All our food is marked to show if it’s free of flour, lactose, or sugar, and if it’s vegetarian or vegan. That said, please bear in mind that some of our raw materials are prepared in an environment that processes wheat and other wheat-containing cereals, nuts, peanuts, milk, eggs, soy, sesame seeds, mustard, celery, lupin, fish, crustaceans, or molluscs, and may therefore contain traces of the above.
    </p>
    <p>
        <small>
            INFORMATION RELATING TO
            THE CONSUMER FOOD
            1169/2011 / EU 4 5/3. c. under Regulation
        </small>
    </p>
    <br/>
</section>
<?php } ?>


<?php if ($language === 'hu') { ?>
<section class="content menu payment-methods">
    <h2>Fizetési lehetőségek</h2>
    <p>
        Éttermünkben az American Express kártyán kívül, <br>minden más bankkártyával lehetséges a fizetés.
    </p>
    <ul>
      <li class="icon-pay-mastercard">Mastercard</li>
      <li class="icon-pay-visa">Visa</li>
      <li class="icon-pay-szechenyi">SZÉPkártya (OTP, MKB, K&amp;H)</li>
      <li class="icon-pay-ticket">Ticket restaurant, Ticket compliments</li>
      <li class="icon-pay-erzsebet">Erzsébetutalvány, Erzsébetkártya</li>
    </ul>
</section>
<section class="content menu allergenes">
    <h2>
      Allergének:
      <em class="flourfree" title="Lisztmentes">Lisztmentes</em>
      <em class="lactosefree" title="Laktózmentes">Laktózmentes</em>
      <em class="vegetarian" title="Vegetáriánus">Vegetáriánus</em>
      <em class="vegan" title="Vegán">Vegán</em>
    </h2>
    <p>
        Minden ételünkön feltüntetjük ha liszt-, laktóz- vagy cukormentes, vegetáriánus vagy vegán. Ennek ellenére kérjük, vedd figyelembe, hogy alapanyagaink egy része búza-, és gluténtartalmú gabonaféléket, dióféléket, földimogyorót, tejet, tojást, szóját, szezámmagot, mustárt, zellert, csillagfürtöt, halat, rákféléket, puhatestűeket is feldolgozó üzemben készült, így ezeket nyomokban tartalmazhatja.
    </p>
    <p>
        <small>
            A FOGYASZTÓK ÉLELMISZEREKKEL KAPCSOLATOS TÁJÉKOZTATÁSA A
            1169/2011/EU 4., 5/3. sz. RENDELET ALAPJÁN TÖRTÉNIK.
        </small>
    </p>
    <br>
</section>
<?php } ?>
