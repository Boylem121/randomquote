 $(document).ready(function() {

   var tweet = "";
   var preview = document.querySelectorAll ("#tweet-link");

   $("#new-quote").click(function() {
     $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(value) {
       tweet = 'https://twitter.com/intent/tweet?text=' + value.quote;
       $('#quote-place').html('<h2 id="quote">' + value.quote + '</h2>');
       preview[0].setAttribute('href', tweet);
     });
   });


 });
