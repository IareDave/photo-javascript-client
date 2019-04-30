'use strict'

const store = require('../store.js')
const showWorkoutsTemplate = require('../templates/workout-log.handlebars')

export const onCreatePicSuccess = function (data) {
  $('form').trigger('reset')
}

export const onDeletePicSuccess = function (data) {
  $('form').trigger('reset')
}

export const onShowPicSuccess = function (response) {
  $('form').trigger('reset')
  const showWorkoutsHtml = showWorkoutsTemplate({ pictures: response.pictures })
  $('.workout-log').html(showWorkoutsHtml)
  $('#workout-log').show()
  if (response.pictures.length === 0) {
    $('#view-empty-message').fadeTo(2000, 500).slideUp(500, function () {
      $('#view-empty-message').slideUp(500)
    })
  }
}

export const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#signup-message').show()
  $('#signin-message').text('')
  $('#signup-message').text('Sign up successful! Sign in to play the game')
  $('#signup-message').css('color', 'green')
  // $('#sign-in').show()
  $('#sign-up').hide()
  $('.back').hide()
  $('.menusignup').show()
  $('.menusignin').show()
  $('#change-password').hide()
}

export const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('#signin-message').text('')
  $('#signup-message').show()
  $('#signup-message').text('Sign up failed!')
  $('#signup-message').css('color', 'red')
}

export const signInSuccess = function (data) {
  store.user = data.user
  $('form').trigger('reset')
  $('#reset-button').show()
  $('#signin-message').show()
  $('#signin-message').text('Sign in successful! Click New Game to Begin')
  $('#signin-message').css('color', 'green')
  $('#endgame-message').show()
  $('#show-stats').hide()
  $('#signup-message').text('')
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.menunewgame').show()
  $('.menushowstats').show()
  $('.menulogout').show()
  $('.menudelete').show()
  $('.menusignin').hide()
  $('.menusignup').hide()
  $('.menuchangepw').show()
  $('.back').hide()
}

export const signInFailure = function (data) {
  $('form').trigger('reset')
  $('#signin-message').show()
  $('#signin-message').text('Sign in failed!').css('color', 'red')
  $('#signin-message').css('color', 'red')
  $('#signup-message').text('')
}

export const changePwSuccess = function (data) {
  $('form').trigger('reset')
  $('#changepassword-message').show()
  $('#signin-message').hide()
  $('#change-password').hide()
  $('#showstats-message').text('')
  $('#endgame-message').text('')
  $('#signout-message').text('')
  $('#endgame-message').text('')
  $('.menushowstats').show()
  $('.menudelete').show()
  $('.menunewgame').show()
  $('.menulogout').show()
  $('.menuchangepw').show()
  $('#changepassword-message').text(`You have successfully changed your password. Press new game to continue`).css('color', 'green')
  // store.user = data.user
}

export const changePwFailure = function (data) {
  $('form').trigger('reset')
  $('#signin-message').text('')
  $('#changepassword-message').show()
  $('#changepassword-message').text(`Something went wrong`).css('color', 'red')
}

export const signOutSuccess = function (data) {
  $('form').trigger('reset')
  $('#signup-message').text('')
  $('#signin-message').text('')
  $('#changepassword-message').text('')
  $('#reset-button').hide()
  $('#show-stats').hide()
  $('#sign-out').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  $('#showstats-message').text('')
  $('#endgame-message').text('')
  $('#sign-up').hide()
  $('.menusignup').show()
  $('.menudelete').hide()
  $('.menusignin').show()
  $('.menuchangepw').hide()
  $('.back').hide()
  $('#workout-log').hide()
  store.user = null
  store.game = null
}

export const signOutFailure = function (data) {
  $('form').trigger('reset')
  $('#signout-message').text(`Something went wrong`).css('color', 'red')
}

export const newGameSuccess = function (data) {
  $('#signin-message').text('')
  $('#signup-message').text('')
  $('#changepassword-message').text('')
  $('#showstats-message').text('')
  store.game = data.game
  $('#show-stats').show()
  $('.container-fluid').css('z-index', '3')
  $('#endgame-message').text('')
}

export const newGameFailure = function (data) {
  $('#newgame-message').text(`Something went wrong`).css('color', 'red')
}

export const showStatsSuccess = function (data) {
  $('#showstats-message').show()
  $('#signin-message').text('')
  $('#signup-message').text('')
  $('#endgame-message').text('')
  $('#changepassword-message').text('')
  $('#showstats-message').text(`You have played ${data.games.length} games`).css('color', 'green')
}

export const showStatsFailure = function (data) {
  $('#showstats-message').show()
  $('#showstats-message').text(`Something went wrong`).css('color', 'red')
}
