<?php
 //require_once("twitteroauth/TwitterOAuth.php");
 require_once("autoload.php");
 use Abraham\TwitterOAuth\TwitterOAuth;
 ?>
 <?php
 $consumerkey="c2RMprZeqxE4dvj9JQx8dnMLs";
 $consumersecret="fDO3EMizwahup0P5MWzq5TYpk1bsO1Vs6S5HIGcGDpTeLXbmlL";
 $authtoken="2539953380-vGp6Mwhxwt4xvJSHPDyB8lzmDMJ3hzFzTdiobfT";
 $authsecret="T9x2Ha1P805ICUYSluEpp82bUL3dUt0iXA9oiXDwqDsLO";
 //require"twitteroauth/TwitterOAuth.php";
 $twitter= new TwitterOAuth($consumerkey,$consumersecret,$authtoken,$authsecret); 
 $content = $twitter->get("account/verify_credentials");
 $trends= $twitter->get("trends/place",array("id" => 1,"exclude" => 'hashtags'));
 echo json_encode($trends);
 ?>
