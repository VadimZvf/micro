export default (initialState, actions) => (state = initialState, action) =>
    actions[action.type] ? actions[action.type].call(null, state, action) : state;
