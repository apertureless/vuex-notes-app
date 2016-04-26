import { STORAGE_KEY } from './store'
import ls from 'local-storage'

const localStorageMiddleware = {
  onMutation (mutation, { notes }) {
    ls.set(STORAGE_KEY, JSON.stringify(notes))
  }
}

export default [localStorageMiddleware]
