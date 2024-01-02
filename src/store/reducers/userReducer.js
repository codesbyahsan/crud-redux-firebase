const initialState = {
    users: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERS':
        return { ...state, users: action.payload };
      case 'ADD_USER':
        return { ...state, users: [...state.users, action.payload] };
      case 'UPDATE_USER':
        return {
          ...state,
          users: state.items.map((user) =>
            user.id === action.payload.id ? { ...user, ...action.payload } : user
          ),
        };
      case 'DELETE_USER':
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  