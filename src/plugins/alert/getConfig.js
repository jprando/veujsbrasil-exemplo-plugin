export default function(msg) {
  const { title, message, ok, cancel } = msg
  return {
    title: title || 'meu app',
    message: message || msg,
    ok,
    cancel
  }
}
