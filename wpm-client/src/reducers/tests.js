export default (state = [], action) => {
  switch(action.type) {
    case 'GET_TESTS_SUCCESS':
      return action.tests;

    case 'CREATE_TEST_SUCCESS':
      return state.concat(action.test);

    default: 
      return state;
  }
}