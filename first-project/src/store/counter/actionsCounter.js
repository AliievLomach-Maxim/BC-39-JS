import { createAction } from '@reduxjs/toolkit'

export const plusAction = createAction('COUNTER/PLUS')

export const minusAction = createAction('COUNTER/MINUS')

export const stepAction = createAction('COUNTER/STEP')
