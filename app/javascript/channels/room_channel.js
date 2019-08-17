import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("action cable working...");
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {

    $('#msg').append(`<div class="message">${data.content}</div>`);
    console.log(data.content)
    // Called when there's incoming data on the websocket for this channel
  }
});

var submit_messages = function () {
  $('#message_content').on('keydown', function (event) {
    if (event.keyCode === 13 && event.target.value !== '') {
      $('input[type=submit]').click();
      event.target.value = '';
      event.preventDefault();
      console.log('You hit enter...');
    }
  });
}

$(document).on('turbolinks:load', function () {
  submit_messages();
});