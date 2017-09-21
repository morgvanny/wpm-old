export default (state = [], action) => {
  switch(action.type) {
    case 'GET_TESTS_SUCCESS':
      return action.tests;

    case 'CREATE_TEST_SUCCESS':
      return state.concat(action.test);

    case 'UPDATE_TEST_SUCCESS':
      state = state.map(test => test.id === action.test.id ?
            // transform the one with a matching id
            { ...test, likes: action.test.likes } : 
            // otherwise return original test
            test
        )
      return state;

    default: 
      return state;
  }
}