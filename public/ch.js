;
// Registro de Características de PWA's
((d, w, n, c) => {
  // Registro de SW
  if ('serviceWorker' in n) {
    w.addEventListener('load', () => {
      n.serviceWorker.register('./utopia.js')
        .then(registration => {
          c(registration)
          c(
            'Service Worker registrado con éxito 🤗',
            registration.scope
          )
        })
        .catch(err => c(`Registro de Service Worker fallido 😌 \n${err.message}`))
    })
  }

  // Activar Notificaciones
  if (w.Notification && Notification.permission !== 'denied') {
    Notification.requestPermission(status => {
      console.log(status)
      let n = new Notification('Utopia', {
        body: 'Bienvenido a utopia 😊',
        icon: 'favicon-32x32.webp'
      })
    })
  }

  // Activar Sincronización de Fondo
  if ('serviceWorker' in n && 'SyncManager' in w) {
    function registerBGSync () {
      n.serviceWorker.ready
        .then(registration => {
          return registration.sync.register('github')
            .then(() => c('Sincronización de Fondo Registrada 😊'))
            .catch(err => c(`Fallo la Sincronización de Fondo 😌 ${err.message}`))
        })
    }

    registerBGSync()
  }

  // Compartiendo contenido con el API Share
  // if ( n.share !== undefined ) {
  //   d.addEventListener('DOMContentLoaded', e => {
  //     let shareBtn = d.getElementById('share')

  //     shareBtn.addEventListener('click', e => {
  //       n.share({
  //         title: d.title,
  //         text: 'Hola soy un contenido para compartir',
  //         url: w.location.href
  //       })
  //       .then(() => c.log('Contenido compartido con éxito') )
  //         .catch( err => c.log('Error al compartir: ', err) )
  //     })
  //   })
  // }
})(document, window, navigator, console.log);

// Detección del Estado de la Conexión
((d, w, n, c) => {
  const header = d.querySelector('.Header'),
    metaTagTheme = d.querySelector('meta[name=theme-color]')

  function networkStatus (e) {
    c(e, e.type)

    if (n.onLine) {
      metaTagTheme.setAttribute('content', '#F7DF1E')
      let n = new Notification('Utopia', {
        body: 'Conexión reestablecida 😊',
        icon: 'favicon-32x32.webp'
      })
    } else {
      metaTagTheme.setAttribute('content', '#666')
      let n = new Notification('Utopia', {
        body: 'Conexión perdida 😓',
        icon: 'favicon-32x32.webp'
      })
    }
  }

  d.addEventListener('DOMContentLoaded', e => {
    if (!n.onLine) {
      networkStatus(this)
    }

    w.addEventListener('online', networkStatus)
    w.addEventListener('offline', networkStatus)
  })
})(document, window, navigator, console.log)
