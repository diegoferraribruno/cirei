
function twitterTag(hashtags_text){
    var tw_text = "Tá na hora de você olhar pro Ciro! Agora é Ciro!";
    var alt_text = "-E aí, já Cirou hoje? -Cirei?! Totalmente!!! Que loucura bicho!";
    tw_text = "https://twitter.com/intent/tweet?hashtags="+hashtags_text+"&text="+tw_text;
    tw_text = tw_text.replace(" ","%20");
    tw_text = tw_text.replace("#","%23");
    tw_text = tw_text.replace("=%2c","=");
    window.open(tw_text);
  }
  
  