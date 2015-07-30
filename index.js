window.XHROverride = function (cfg) {
  var proxy = cfg.methods
  for (var name in proxy) {
    var method = window.XMLHttpRequest.prototype[name]
    if (method) {
      overrideMethod(method, name, proxy[name])
    } else {
      console.error('Tried to override non-existent "' + method + '" method in XmlHttpRequest object.')
      continue
    }
  }

  function overrideMethod(original, name, cb) {
    window.XMLHttpRequest.prototype[method] = function () {
      var args = [].slice.call(arguments)
      cb.apply(this, args)
      return original.apply(this, args)
    }
  }

  var old = window.XMLHttpRequest
  window.XMLHttpRequest = function () {
    var xhr = new old,
      listeners = cfg.listeners

    for (var i in listeners) {
      xhr.addEventListener(i, listeners[i])
    }

    return xhr
  }
}
