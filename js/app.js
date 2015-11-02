//TODO LIST
//CREATE NEW DIV FOR TIMEAGO APPENDING
//GENERATE DYNAMIC TIME STAMP 

$(document).ready(function () {


  /*-----FUNCTION-DECLARATIONS-----*/

  //tweent template factory from baked in html.
  function createTweet() {
    var tweetTemplate = $('div.tweet-wrap').clone();
    tweetTemplate.find(".avatar").attr("src", "img/jared.jpg");
    tweetTemplate.find(".fullname").text($("#dashboard p:first-of-type").text());
    tweetTemplate.find(".username").text('@' + $("#myUserName").text());
    tweetTemplate.find("time").attr('datetime', newTime());
    return tweetTemplate;
  }

  //creates a new time stamp coverted to format timeago.js requires
  function newTime() {
    var timestamp = new Date();
    return timestamp.toISOString();
  }

  /*-----EVENT--HANDLERS-----*/

  //listening for click on text field to increase size of field
  $(".tweet-compose").on("click", function () {
    //increase text field side
    $("#tweet-controls").show('slow');
  });

  //listening for keyup event on tweetbox
  //logic to determine length of string 
  $(".tweet-compose").keyup(function () {
    var maxChar = 140;
    var currentLength = $(this).val().length;
    if (currentLength > maxChar) {
      $("#char-count").text("hey back up you.");
      $("#tweet-submit").hide();
    } else {
      $("#tweet-controls button").show();
      $("#char-count").text(currentLength);
    }
  });

  //event handler for submitting and prepending new tweet to feed
  $("#tweet-content").on("click", "#tweet-submit", function () {
    var tweetTemplate = createTweet();
    tweetTemplate.find('.tweet-text').text($('.tweet-compose').val());
    $(".timeago").timeago();
    $("#stream").prepend(tweetTemplate.html());
    $(".timeago").timeago();
  });

  //listening for mouse events to show and hide 
  $("#stream").on({
    mouseenter: function () {
      var $Stats = $(this).find('div.stats');
      var $Favorites = $(this).find('div.favorites');
      var $Reply = $(this).find('div.reply');
      $Stats.show();
      $Favorites.show();
      $Reply.show();
    },

    mouseleave: function () {
      var $Stats = $(this).find('div.stats');
      var $Favorites = $(this).find('div.favorites');
      var $Reply = $(this).find('div.reply');
      $Stats.hide();
      $Favorites.hide();
      $Reply.hide();
    }
  }, ".tweet");

});