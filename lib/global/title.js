let orig = document.title

exports = module.exports = set

function set (str) {
  let i = 1
  let args = arguments
  document.title = str.replace(/%[os]/g, (_) => {
    switch (_) {
      case '%o':
        return orig
      case '%s':
        return args[i++]
    }
  })
}

exports.reset = () => {
  set(orig)
}
