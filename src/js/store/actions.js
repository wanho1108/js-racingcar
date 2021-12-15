import { ACTIONS } from '../constants.js';

export default {
  /*
  context: actions, mutations, state, status, events(SubPub) ....
  payload: payload
   */
  setCarNames(context, payload) {
    context.commit(ACTIONS.SET_CAR_NAMES, payload);
  },

  setTryCounts(context, payload) {
    context.commit(ACTIONS.SET_TRY_COUNTS, payload);
  },

  setProcessMatrix(context, payload) {
    context.commit(ACTIONS.SET_PROCESS_MATRIX, payload);
  },

  setWinners(context, payload) {
    context.commit(ACTIONS.SET_WINNERS, payload);
  },
};
