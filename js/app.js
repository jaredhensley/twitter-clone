$(document).ready(function () {

  //template from baked in html.
  var tweetTemplate = $('div.tweet-wrap').clone();
  tweetTemplate.find(".avatar").attr("src", "img/jared.jpg");
  tweetTemplate.find(".fullname").text($("#dashboard p:first-of-type").text());
  tweetTemplate.find(".username").text('@' + $("#myUserName").text());


  //listening for click on text field to increase size of field
  $(".tweet-compose").on("click", function () {
    //increase text field side
    $("#tweet-controls").show('slow');
  });

  //listening for keyup event on tweetbox 
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
    tweetTemplate.find('.tweet-text').text($('.tweet-compose').val());
    $("#stream").prepend(tweetTemplate.html());
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

  /*$("div.timeago").timeago(newDate());*/


});




/*  var tweetTemplate = $('<div class="tweet">' +
    '<div class="content">' +
    '<img class="avatar" src="img/damenleeturks.jpg" />' +
    '<strong class="fullname">' +
    'My BFF</strong>' +
    '<span class="username">@mybff</span>' +
    '<p class="tweet-text">Today is an amazing day.</p>' +
    '<div class="tweet-actions">' + '<ul>' + '<li>' +
    '<span class="icon action-reply">' + '</span>' +
    ' Reply</li>' + '<li><span class="icon action-retweet">' +
    '</span> Retweet</li>' + '<li><span class="icon action-favorite">' + '</span>' + 'Favorite</li>' + '<li><span class="icon action-more"></span> More</li>' + '</ul>' + '</div>');*/