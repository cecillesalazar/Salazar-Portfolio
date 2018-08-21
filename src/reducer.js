const initialState = {
  showDashboard: false
};

export const reducer = (state=initialState, action) => {
    if(action.type === 'SHOW_DASHBOARD') {
      return Object.assign({}, state, {
        showDashboard: action.bool
      })
    }
    return state;
};
