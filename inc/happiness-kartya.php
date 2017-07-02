<section class="content aboutus">

    <h1>fruccola Happiness Kártya</h1>


    <p>A fruccola Happiness kártyák a fruccola üzletekben kaphatók.</p>

    <p>A kártyát bármekkora pénzösszeggel feltöltheted.</p>

    <p>Feltöltéshez használhatsz étkezési utalványt, készpénzt vagy bankkártyát.</p>

    <p>Ha 10.000 Ft-nál nagyobb összeget töltesz fel, akkor a feltöltött összeg10%-át jóváírjuk a kártyádon ajándékként.</p>

    <p>A fruccola kártyát csak abban az étteremben használhatod fel, amelyikben vásároltad.</p>

    <p>A kártyával részben vagy egészben bármilyen termékért fizethetsz a fruccola éttermekben.</p>

    <p>A kártya névre szól és át nem ruházható.</p>

    <p>A kártyaegyenlegedet az üzleteinkben tudhatod meg. Ehhez csak a kártyaszámodra lesz szükség.</p>

    <p>A kártyád feltöltéséhez csak el kell látogatnod abba a fruccola étterembe, ahol a kártyát vásároltad.</p>

    <p>A kártyára feltöltött összeget 2050. december 31-ig vásárolhatod le.</p>


    <p><br/></p>

    <form action="http://fruccola.hu/admin/api/add-happiness-subscriber" method="post" role="form" id="subscribe">
        <h1>Happiness kártya rendelés</h1>
        <p>Add meg Happiness kártya felhasználására jogosult személy pontos email címét és azt, hogy melyik fruccola étteremben legyen felhasználható.</p>
        <p>Ha a felhasználásra jogosult személy Te leszel akkor a saját adatidat add meg.</p>

        <label for="surname" class="col-sm-2 control-label">Felhasználásra jogosult vezetékneve:
            <input type="text" class="form-control" id="surname" name="surname" value="">
        </label>

        <label for="firstname" class="col-sm-2 control-label">Felhasználásra jogosult keresztneve:
            <input type="text" class="form-control" id="firstname" name="firstname" value="">
        </label>

        <label for="email" class="col-sm-2 control-label">Felhasználásra jogosult email címe:
            <input type="email" class="form-control" id="email" name="email" value="">
        </label>

        <label for="amount_huf" class="col-sm-2 control-label">Feltöltendő összeg (HUF):
            <input type="number" class="form-control" id="amount_huf" name="amount_huf" value="">
        </label>


        <label for="place_id_2" class="checkbox">
            <input type="radio" id="place_id_2" name="places[]" value="2" >
            <span>Kristóf téri regisztrációt kérek.</span>
        </label>
        <label for="place_id_3" class="checkbox">
            <input type="radio" id="place_id_3" name="places[]" value="3" >
            <span>Csőrsz utcai regisztrációt kérek.</span>
        </label>
        <label for="place_id_1" class="checkbox">
            <input type="radio" id="place_id_1" name="places[]" value="1" >
            <span>Arany János utcai regisztrációt kérek.</span>
        </label>
      
        <input type="hidden" name="language" value="hu" />
        <input type="hidden" name="created_by" value="happiness-webform-1.2-hu" />
        <input type="hidden" name="create" value="create" />
        <p class="message"></p>
        <button type="submit">Beküldöm igénylésem</button>
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
    <p><br/></p>

    <h1>JOGI FELTÉTELEK</h1>
    <p><br/></p>

    <p>A fruccola nem vállal felelősséget az elveszett, ellopott, sérült vagy felhatalmazás

    nélkül felhasznált kártyákért. A fruccola fenntartja a jogot, hogy külön értesítés

    nélkül megváltoztassa a jogi feltételeket.  Amennyiben a fruccola hatáskörén

    kívülálló, általa nem kontrollálható és neki nem felróható okból nem tudja teljesíteni a

    Szolgáltatás nyújtásához kapcsolódó kötelezettségeit, az nem minősül

    szerződésszegésnek. Ilyen, úgy nevezett vis maior helyzetnek minősül különösen a

    háború, polgári felkelés, sztrájk, zavargás, természeti katasztrófa, tűz, robbanás,

    elektromos energiaszolgáltatás szünetelése, bérelt vonali szolgáltatás kimaradása vagy

    szünetelése, szükségállapot vagy bármely egyéb hasonló elháríthatatlan helyzet.

    Amennyiben a fruccola a beváltási határidő előtt fejezi be az étterem üzemeltetését,

    ahol a kártya beváltható, akkor a fruccola köteles erről a kártya tulajdonosát a

    beváltási határidő előtt legalább 1 hónappal értesíteni. Ezt követően nem áll

    módunkban a fel nem használt összeg beváltásával kapcsolatos követelést

    érvényesíteni. Az elveszett, megrongálódott, ellopott kártyát nem áll módunkban

    elfogadni és a serült kártyán lévő összeget jóváírni. </p>

    <p><br/></p>

</section>