module.exports = {
    attributes: {
      name: { 
        type: 'string', 
        required: true 
    },

      description: { 
        type: 'string'
    },
      
      dueDate: { 
        type: 'string', 
        columnType: 'datetime' 
    },

      color: {
        type: 'string',
        required: true
    },
      
      completed: { 
        type: 'boolean', 
        defaultsTo: false
     }
    }
  };
  
//Fonte: KTERRA. Instruções. Repositório GitHub. Disponível em: https://github.com/kterra/Inteli-2024-1B/tree/main/instrucoes. Acesso em: 2 out. 2024.