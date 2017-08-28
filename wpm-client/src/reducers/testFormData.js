const initialState = {
  team: '', 
  wpm: '', 
  length: '',
  words: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.testFormData;

    case 'RESET_TEST_FORM':
      return initialState;
    
    default: 
      return state;
  }
}