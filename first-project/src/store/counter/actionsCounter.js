import { PLUS, MINUS, STEP } from './typesCounter'

export const plusAction = () => ({ type: PLUS })

export const minusAction = () => ({ type: MINUS })

export const stepAction = (value) => ({ type: STEP, payload: value })
