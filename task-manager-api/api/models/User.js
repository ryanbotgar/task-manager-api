module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      unique: true
    }
  },

  tasks: {
    collection: 'task',
    via: 'user'
  }

};

//Fonte: KTERRA. Instruções. Repositório GitHub. Disponível em: https://github.com/kterra/Inteli-2024-1B/tree/main/instrucoes. Acesso em: 2 out. 2024.
