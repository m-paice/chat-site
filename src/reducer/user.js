const initialState = {
  nome: '',
  email: '',
  users: [{ nome: 'Matheus Paice', email: 'matheus.paice@gmail.com' }],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        users: [...state.users, action.data],
      };
    default:
      return state;
  }
};

export default user;
