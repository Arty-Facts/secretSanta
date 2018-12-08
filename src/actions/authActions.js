export const updateLogInInfo = (fieldType, data) => {
  return {
    type: 'UPDATE_LOGIN_INFO',
    payload: { key: fieldType, value: data },
  };
}

export const validateUser = (fieldType, data) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: true,
    };
  }

