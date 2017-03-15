const log4js = require('log4js')
const nodemailer = require('nodemailer')
const config = require('config')

const createApp = require('./app')
const connectDatabase = require('./database')

log4js.loadAppender('file')
log4js.addAppender(log4js.appenders.file('logs/debug.log'))

const logger = log4js.getLogger()
logger.setLevel('ERROR')

const transporterConfig = config.get('transporter')
const transporter = nodemailer.createTransport(transporterConfig)

const app = createApp(connectDatabase(), logger, transporter)

app.listen(3000, () => {
  console.log('App listening on port 3000.')
})
