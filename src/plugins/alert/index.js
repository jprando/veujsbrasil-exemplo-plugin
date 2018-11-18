import getConfig from './getConfig'
import Alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.css'
import 'alertifyjs/build/css/themes/default.min.css'
// import 'alertifyjs/build/css/themes/bootstrap.min.css'
// import 'alertifyjs/build/css/themes/semantic.min.css'

function alert(msg) {
  const { title, message } = getConfig(msg)
  Alertify.alert(title, message)
}

function inform(msg) {
  const { message } = getConfig(msg)
  Alertify.success(message)
}

function informError(msg) {
  const { message } = getConfig(msg)
  Alertify.error(message)
}

function confirm(msg) {
  const { title, message, ok, cancel } = getConfig(msg)
  Alertify.confirm(title, message, ok, cancel)
}

export default function(Vue) {
  Vue.prototype.$alert = {
    modal: alert,
    info: inform,
    error: informError,
    confirm: confirm
  }
}
