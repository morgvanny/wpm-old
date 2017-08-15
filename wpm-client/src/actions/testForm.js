// ** Action Creators **
export const updateTestFormData = testFormData => {
  return {
    type: 'UPDATED_DATA',
    testFormData
  }
}

export const resetTestForm = () => {
  return {
    type: 'RESET_TEST_FORM'
  }
}