const express = require('express'),
  path = require('path'),
  cors = require('cors')
require('dotenv').config()
const chalk = require('chalk')
const app = express(),
  _0x5e7b60 = {}
_0x5e7b60.extended = true
app.use(express.urlencoded(_0x5e7b60))
const fs = require('fs')
app.use(express.json())
const PORT = process.env.PORT || 3500
console.log("hehe")
async function regenToken() {
  let _0x417804 = require('./helper/refreshToken')
  let _0x5ee048 = await _0x417804()
  if (_0x5ee048.success) {
    console.log(_0x5ee048.message)
  } else {
    console.log('error while genrating refreshToken Token\nPlease login again')
  }
}
if (fs.existsSync('./tmp/tokenData.jiotv')) {
}
!fs.existsSync('./tmp/CookeyData.jiotv') &&
  fs.writeFileSync('./tmp/CookeyData.jiotv', '{}')
app.use(cors())
const loginRoute = require('./routes/login'),
  ipRoute = require('./routes/ip'),
  channelsRoute = require('./routes/channel')
const playlistRoute = require('./routes/playlist')
app.use('/', loginRoute)
app.use('/', ipRoute)
app.use('/', channelsRoute)
app.use('/', playlistRoute)
app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => {
  console.log(
    '==================================================================='
  )
  console.log(chalk.green("THIS SERVER IS 100% FREE. PLEASE DON'T PAY ANYONE."))
  console.log(
    chalk.green(
      'STRICT ACTION WILL BE TAKEN AGAINST THOSE WHO ARE SELLING THIS.'
    )
  )
  console.log(
    chalk.green(
      'IF ANYONE TRYING TO SELL IT, PLEASE REPORT IT ON OUR DISCORD SERVER\nhttps://discord.gg/suyzkCQKhC'
    )
  )
  console.log(chalk.green('VERSION 2.4.1'))
  console.log(
    chalk.green(
      '980+ CHANNELS AVAILABLE. MORE FEATURES WILL COME SOON. STAY TUNED'
    )
  )
  console.log(
    '==================================================================='
  )
  console.log(
    chalk.red(
      '       __ ____ ____     ______ _    __ \n      / //  _// __ \\   /_  __/| |  / / \n __  / / / / / / / /    / /   | | / /  \n/ /_/ /_/ / / /_/ /    / /    | |/ /   \n\\____//___/ \\____/    /_/     |___/    \n                                '
    )
  )
  console.log(
    '==================================================================='
  )
  console.log('TV server is running on port ' + PORT)
  console.log(
    'Please open http://localhost:' +
      PORT +
      '/login to login and get playlist if running server for the first time'
  )
  console.log('If facing any errors, please login from portal again')
  console.log('you can use server m3u8 links in other websites and apps')
})
;(function () {
  const _0x38a451 = function () {
    let _0x5e8767
    try {
      _0x5e8767 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x25cc29) {
      _0x5e8767 = window
    }
    return _0x5e8767
  }
  const _0x170b88 = _0x38a451()
  _0x170b88.setInterval(_0x3705f4, 4000)
})()
function _0x3705f4(_0x48c27b) {
  function _0x48fe41(_0x3eb3cc) {
    if (typeof _0x3eb3cc === 'string') {
      return function (_0x1b4a25) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x3eb3cc / _0x3eb3cc).length !== 1 || _0x3eb3cc % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x48fe41(++_0x3eb3cc)
  }
  try {
    if (_0x48c27b) {
      return _0x48fe41
    } else {
      _0x48fe41(0)
    }
  } catch (_0x4713f0) {}
}
