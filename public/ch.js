if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported')

  navigator.serviceWorker.register('./utopia.js')
    .then(function (swReg) {
      console.log('El service worker está registrado', swReg)

      swRegistration = swReg
    })
    .catch(function (error) {
      console.error('Service Worker Error', error)
    })
} else {
  console.warn('Push messaging No está soportado')
  pushButton.textContent = 'Push Not Supported'
}