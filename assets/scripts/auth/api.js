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

export const deletePic = function (data) {
  return $.ajax({
    url: config.apiUrl + `/pictures/${data}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

export const updatePic = function (data) {
  return $.ajax({
    url: config.apiUrl + `/pictures/${store.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

export const createPic = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pictures',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

export const showPic = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pictures',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}
