import * as mongoose from 'mongoose'
import { getConfigurationValue } from './'
import { appLogs } from './logger'

const databaseConfig = getConfigurationValue('database')

const IS_PROD = process.env.NODE_ENV

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/10743

const mongooseOptions = !IS_PROD ?
  {} :
  {
    keepAlive: 120,
    connectTimeoutMS: 30000,
  }

mongoose.connect(databaseConfig.mongoUrl, mongooseOptions)
 .catch((err) => {
    appLogs.error('MongoDB connection error. Please make sure MongoDB is running. ' + err)
  })
