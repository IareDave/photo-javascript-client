'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

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
  $('.update-pic-form').hide()
  $('.delete-pic-form').hide()
  $('#endgame-message').text('')
  $('#showstats-message').text('')
  $('#newgame-message').text('')
  $('#signout-message').text('')
  $('#signup-message').hide()
  $('#signin-message').hide()
}

export const deletePicMenu = function (data) {
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
  $('.create-pic-form').hide()
  $('.update-pic-form').hide()
  $('.delete-pic-form').show()
  $('#endgame-message').text('')
  $('#showstats-message').text('')
  $('#newgame-message').text('')
  $('#signout-message').text('')
  $('#signup-message').hide()
  $('#signin-message').hide()
}

export const updatePicMenu = function (event) {
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
  $('.create-pic-form').hide()
  $('.update-pic-form').show()
  $('.delete-pic-form').hide()
  $('#endgame-message').text('')
  $('#showstats-message').text('')
  $('#newgame-message').text('')
  $('#signout-message').text('')
  $('#signup-message').hide()
  $('#signin-message').hide()
  store.id = $(event.target).data('id')
  console.log(store.id)
}

export const hideMenu = function () {
  $('#ui').addClass('hiddenMenu')
  $('.relap').removeClass('relapclose')
  $('.colap').hide()
  $('.relap').show()
}

export const showMenu = function () {
  $('#ui').removeClass('hiddenMenu')
  $('.relap').addClass('relapclose')
  $('.colap').show()
  $('.relap').hide()
}

export const backButton = function () {
  $('.back').hide()
  if (anotherCounter === 1) {
    anotherCounter -= 1
    $('.menulogout').show()
    $('.menushowstats').show()
    $('.menunewgame').show()
    $('.menudelete').show()
    $('.menuchangepw').show()
    $('.create-pic-form').hide()
    $('.delete-pic-form').hide()
    $('.update-pic-form').hide()
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
  const id = $(event.target).data('id')
  api.deletePic(id)
    .then(() => onShowPic(event))
    .catch(ui.showStatsFailure)
}

export const onUpdatePic = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePic(data)
    .then(() => onShowPic(event))
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
  $('#update-pic').on('submit', onUpdatePic)
  // $('#delete-pic').on('submit', onDeletePic)
  $('#workout-log').on('click', '.delete', onDeletePic)
  $('#workout-log').on('click', '.update', updatePicMenu)
  $('#show-stats').on('click', onShowPic)
  $('.collap').on('click', hideMenu)
  $('.relap').on('click', showMenu)
}
