'use strict'

const config = require('../config.js')
const store = require('../store.js')

export const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

export const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

export const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + (store.user ? store.user.token : '')
    },
    data
  })
}

export const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + (store.user ? store.user.token : '')
    }
  })
}

export const onPlayMade = function (index, currentPlayer, gameIsOver) {
  return $.ajax({
    url: config.apiUrl + `/games/${(store.game ? store.game.id : '')}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + (store.user ? store.user.token : '')
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': currentPlayer
        },
        'over': gameIsOver
      }
    }
  })
}
