import Router from 'koa-router'
import { spawnSync } from 'child_process'
import logger from './logger'

export default function routes(server) {
  const apiRouter = new Router()

  apiRouter.get('/', async ctx => {
    ctx.body = { ok: true }
  })

  apiRouter.put('/sensor/htu21d', async ctx => {
    const cmd = spawnSync('/home/pi/anavi-examples/sensors/HTU21D/c/HTU21D', [])
    if (cmd.error) {
      logger('could not get sensor data:', cmd.error)
      ctx.body = {
        ok: false,
        message: 'could not get sensor data',
        result: cmd.error.toString()
      }
    } else {
      const [, line2, line3] = cmd.stdout.toString().split('\n')
      const [, temperatureStr] = line2.split(': ')
      const [, humidityStr] = line3.split(': ')
      ctx.body = {
        temperature: temperatureStr,
        humidityStr: humidityStr
      }
    }
  })

  server.use(apiRouter.routes())
}
