import * as connectMongo from 'connect-mongo'
import * as expressSession from 'express-session'
import { getConfigurationValue } from './../config'
import { COOKIES, MAXAGE } from './../utils/constants'

const databaseConfig = getConfigurationValue('database')

const MongoStore = connectMongo(expressSession)

const options = {
  url: databaseConfig.mongoUrl,
}

const mongoStore = new MongoStore(options)

const session = expressSession({
  secret: COOKIES.SECRET,
  name: COOKIES.SESSION,
  store: mongoStore,
  resave: false,
  saveUninitialized: true,
  cookie: { path: '/', httpOnly: true, secure: false, maxAge: MAXAGE },
})
export default session
