import { resetTestForm } from './testForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setTests = tests => {
  return {
    type: 'GET_TESTS_SUCCESS',
    tests
  }
}

const addTest = test => {
  return {
    type: 'CREATE_TEST_SUCCESS',
    test
  }
} 

// ** Async Actions **
export const getTests = () => {
  return dispatch => {
    return fetch(`${API_URL}/tests`)
      .then(response => response.json())
      .then(tests => dispatch(setTests(tests)))
      .catch(error => console.log(error));
  }
}

export const createTest = test => {
  return dispatch => {
    return fetch(`${API_URL}/tests`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ test: test })
    })
      .then(response => response.json())
      .then(test => {
        dispatch(addTest(test))
        dispatch(resetTestForm())
      })
      .catch(error => console.log(error))
  }
}