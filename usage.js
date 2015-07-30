window.onload = function () {
  var el = document.querySelector('#result')
  el.innerHTML = ''
  function log() {
    el.innerHTML += stringifyArgs(arguments) + '\n'
  }

  function stringifyArgs(args, separator) {
    separator = separator || ' '
    args = Array.prototype.slice.call(args)
    return args.join(separator)
  }

  XHROverride({
    methods: {
      send: function () {
        log('[open]', stringifyArgs(arguments))
      },
      open: function () {
        log('[send]', stringifyArgs(arguments))
      }
    },
    listeners: {
      readystatechange: function () {
        log('[onreadystatechange]', this.readyState)
      }
    }
  })


  var xhr = new XMLHttpRequest()
  xhr.open("GET", "http://www.example.org/ajax.php", true);
  xhr.onreadystatechange = function () {
    console.log('readystate changed')
  }
  xhr.onload = function () {}
  xhr.send()
}
