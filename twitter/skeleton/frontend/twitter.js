const FollowToggle = require('./follow_toggle');

$(document).ready(() => {
  console.log($('.follow-toggle'));
  $('.follow-toggle').each((idx, button) => new FollowToggle(button));
});