export const fetchUser = () => {
  return {
        type: 'FETCH_USER',
    };
};

export const fetchUserError = err => {
  return {
        type: 'USER_LOAD_FAILURE',
        payload: err,
    };
};

export const fetchUserSuccess = data => {
    return {
        type: 'USER_LOAD_SUCCESS',
        payload: data,
    };
};

/*------------------search actions------------------*/

export const searchUser = (userName) => {
    return {
        type: 'SEARCH_USER',
        userName: userName,
    };
};

export const searchUserError = err => {
    return {
        type: 'USER_SEARCH_FAILURE',
        payload: err,
    };
};

export const searchUserSuccess = data => {
    return {
        type: 'USER_SEARCH_SUCCESS',
        userData: data,
    };
};
