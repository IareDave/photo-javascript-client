'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

let backCounter = 0
let anotherCounter = 0

export const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

export const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

export const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

export const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

export const onNewGame = function (event) {
  event.preventDefault()
  $('#endgame-message').text('')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

export const onShowStats = function (event) {
  event.preventDefault()
  api.showStats()
    .then(ui.showStatsSuccess)
    .catch(ui.showStatsFailure)
}

export const signInForm = function (data) {
  $('.signIn').hide()
  $('.signUp').hide()
  $('.back').show()
  backCounter += 1
  $('.sign-in-form').show()
}

export const signUpForm = function (data) {
  $('.signIn').hide()
  $('.signUp').hide()
  $('.back').show()
  backCounter += 1
  $('.sign-up-form').show()
}

export const signUpMenu = function (data) {
  $('.back').show()
  if (backCounter === 0) {
    backCounter += 1
  }
  $('.sign-up-form').show()
  $('.sign-in-form').hide()
  $('#change-password').hide()
  $('.menusignin').hide()
  $('.menusignup').hide()
  $('.menudelete').hide()
}

export const signInMenu = function (data) {
  $('.back').show()
  if (backCounter === 0) {
    backCounter += 1
  }
  $('.sign-in-form').show()
  $('.sign-up-form').hide()
  $('.menusignup').hide()
  $('.menusignin').hide()
  $('.menudelete').hide()
}

export const changePwMenu = function (data) {
  anotherCounter += 1
  $('.back').show()
  $('.sign-in-form').hide()
  $('.sign-up-form').hide()
  $('.menusignup').hide()
  $('.menudelete').hide()
  $('.menulogout').hide()
  $('.menushowstats').hide()
  $('.menunewgame').hide()
  $('.menuchangepw').hide()
  $('#change-password').show()
  $('#endgame-message').text('')
  $('#showstats-message').text('')
  $('#newgame-message').text('')
  $('#signout-message').text('')
  $('#signup-message').hide()
  $('#signin-message').hide()
}

export const createPicMenu = function (data) {
  anotherCounter += 1
  $('.back').show()
  $('.sign-in-form').hide()
  $('.sign-up-form').hide()
  $('.menudelete').hide()
  $('.menusignup').hide()
  $('.menulogout').hide()
  $('.menushowstats').hide()
  $('.menunewgame').hide()
  $('.menuchangepw').hide()
  $('.create-pic-form').show()
  $('#endgame-message').text('')
  $('#showstats-message').text('')
  $('#newgame-message').text('')
  $('#signout-message').text('')
  $('#signup-message').hide()
  $('#signin-message').hide()
}

export const backButton = function (data) {
  $('.back').hide()
  if (anotherCounter === 1) {
    anotherCounter -= 1
    $('.menulogout').show()
    $('.menushowstats').show()
    $('.menunewgame').show()
    $('.menudelete').show()
    $('.menuchangepw').show()
    $('.create-pic-form').hide()
    $('#change-password').hide()
    return
  }
  if (backCounter === 1) {
    $('.sign-up-form').hide()
    $('.sign-in-form').hide()
    $('.signIn').hide()
    $('.signUp').hide()
    $('.menusignup').show()
    $('.menusignin').show()
    // $('.menudelete').show()
    $('#change-password').hide()
    backCounter -= 1
  }
}

export const endButton = function (data) {
  $('.container-fluid').css('z-index', '1')
  $('.end').hide()
}

export const onCreatePic = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createPic(data)
    .then(ui.onCreatePicSuccess)
    .catch(ui.showStatsFailure)
}

export const onShowPic = function (event) {
  event.preventDefault()
  api.showPic()
    .then(ui.onShowPicSuccess)
    .catch(ui.showStatsFailure)
}

export const onDeletePic = function (event) {
  event.preventDefault()
  api.deletePic()
    .then(ui.onShowPicSuccess)
    .catch(ui.showStatsFailure)
}

export const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('.end').on('click', endButton)
  $('.back').on('click', backButton)
  $('.signUp').on('click', signUpForm)
  $('.menusignup').on('click', signUpMenu)
  $('.menusignin').on('click', signInMenu)
  $('.menudelete').on('click', onDeletePic)
  $('.menuchangepw').on('click', changePwMenu)
  $('.signIn').on('click', signInForm)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#reset-button').on('click', createPicMenu)
  $('#create-pic').on('submit', onCreatePic)
  $('#show-stats').on('click', onShowPic)
}
