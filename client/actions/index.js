import * as types from '../constants/ActionTypes'

export function submitFormAction(eventData) {
  return { type: types.SUBMIT_FORM, firstName: eventData.firstName }
}
