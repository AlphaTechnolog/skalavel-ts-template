import {Server, global, log} from 'skalavel'
import tasks from './tasks'
import router from './router'

const server: Server = new Server()

server.setRouter(router)
server.setTasks(tasks)

server.listen(global.fetch('port'), (): void => {
  log.success('Server is listening successfully!')
})