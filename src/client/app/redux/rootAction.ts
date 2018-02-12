// RootActions
import { RouterAction } from 'react-router-redux'
import { $call } from 'utility-types'

import { noteActions } from './note'

const returnsOfActions = [
  ...Object.values(noteActions),
].map($call)

type AppAction = typeof returnsOfActions[number]
type ReactRouterAction = RouterAction

export type RootAction =
  | AppAction
  | ReactRouterAction
