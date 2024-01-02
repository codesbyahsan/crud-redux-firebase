import firebase from '../../firebase/firebase';

export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: users,
});

export const addUser = (user) => {
  return async (dispatch) => {
    try {
      const docRef = await firebase.firestore().collection('users').add(user);
      const newUser = { id: docRef.id, ...user };
      dispatch({ type: 'ADD_USER', payload: newUser });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const snapshot = await firebase.firestore().collection('users').get();
      const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch(setUsers(users));
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
};

export const updateUser = (id, updatedUser) => {
  return async (dispatch) => {
    try {
      await firebase.firestore().collection('users').doc(id).update(updatedUser);
      dispatch({ type: 'UPDATE_USER', payload: { id, ...updatedUser } });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await firebase.firestore().collection('users').doc(id).delete();
      dispatch({ type: 'DELETE_USER', payload: id });
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
};
