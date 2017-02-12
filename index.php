<?php
$config = parse_ini_file("config.ini", true);
$url = parse_url ($_SERVER['REQUEST_URI']);

$params = array();
if (isset($url['query'])) parse_str($url['query'], $params);

$language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
if ($language != 'hu' || $language != 'en' || !isset($language)) $language = 'en';
if (isset($_COOKIE["language"])) $language = $_COOKIE["language"];
if (isset($params["language"])) $language = $params["language"];
setcookie("language", $language, time() + (86400 * 365), "/");
?>
<!doctype html>
<html lang="<?php echo $language?>">
<head>
  <title>fruccola <?php echo $config['titles']['GET '.$url['path']]?></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="google-site-verification" content="LH8Oq-xAG8mKhdS4RrQ6z4hjuhf5bWzQJ8gpaFVmARY" />

  <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
  <link rel="icon" type="image/ico" href="/favicon.ico">
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800&subset=latin,latin-ext" rel="stylesheet">
  <link rel="stylesheet" href="/css/vendor/normalize.css">
  <link rel="stylesheet" href="/css/main.css">

  <script>
    var language = '<?php echo $language?>';
  </script>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  <script src="/js/fruccola.locales.<?php echo $language?>.js"></script>
  <script src="/js/fruccola.email.js"></script>

</head>
<body class="<?php echo $language?>">
  
  
<header class="site-header" id="mobile">
<?php include 'inc/site-header-'.$language.'.html'; ?>
</header>
  
<main class="main-content clearfix <?php if ($url['path'] == '/terkep' || $url['path'] == '/map') echo 'map'; ?>">
<?php include 'inc/'.$config['routes']['GET '. $url['path']]; ?>
</main>
  
  
<footer class="site-footer">
<?php include 'inc/site-footer-'.$language.'.html'; ?>
</footer>



<!-- Google Analytics Code -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-39874982-1', 'fruccola.hu');
  ga('send', 'pageview');

</script>
<!-- End Google Analytics Code -->

<!-- Facebook Pixel Code -->
<script>
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','//connect.facebook.net/en_US/fbevents.js');

    fbq('init', '510450589137328');
    fbq('track', "PageView");</script>
<noscript><img height="1" width="1" style="display:none"
               src="https://www.facebook.com/tr?id=510450589137328&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

<!-- Hotjar Tracking Code for http://www.fruccola.hu -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:119974,hjsv:5};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
</script>
</body>
</html>