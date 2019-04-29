'use strict'

// import { onPlayMade } from './auth/api'
// import { showStats } from './auth/api';

const userEvents = require('./auth/events.js')

$(() => {
  // Api handlers
  $('#signup-message').hide()
  $('#signin-message').hide()
  $('#changepassword-message').hide()
  // $('.container-fluid').hide()
  $('#reset-button').hide()
  $('#show-stats').hide()
  $('#sign-out').hide()
  $('.sign-in-form').hide()
  $('.create-pic-form').hide()
  $('.sign-up-form').hide()
  $('.back').hide()
  $('.menusignup').hide()
  $('.menudelete').hide()
  $('.menusignin').hide()
  $('.menunewgame').hide()
  $('.menushowstats').hide()
  $('.menulogout').hide()
  $('.menuchangepw').hide()
  $('.end').hide()
  // $('#sign-in').hide()
  $('#change-password').hide()

  userEvents.addHandlers()
})
