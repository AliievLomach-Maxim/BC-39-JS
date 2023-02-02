import { NEW_POST } from './typesPosts'

export const createPostAction = (value) => ({ type: NEW_POST, payload: value })
