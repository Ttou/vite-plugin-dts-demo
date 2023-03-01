import type { App } from 'vue'

import Overlay from './Overlay'

const components = [Overlay]

export { Overlay }

export default {
  install: (app: App) => {
    components.forEach(c => app.use(c))
  }
}
