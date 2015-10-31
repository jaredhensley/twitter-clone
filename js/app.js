$(document).ready(function () {
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


  var tweetTemplate = $('div.tweet-wrap').html();

  $("#tweet-content").on("click", "#tweet-submit", function () {

    $("#stream").prepend(tweetTemplate);
  });

  $("#stream").on({
    mouseenter: function () {
      $(this).css('background-color', 'red');
      var showStats = $(this).find('div.stats');
      showStats.show();

    },
    mouseleave: function () {
      $(this).css('background-color', 'blue');
      var showStats = $(this).find('div.stats');
      showStats.hide();

    }
  }, ".tweet");


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