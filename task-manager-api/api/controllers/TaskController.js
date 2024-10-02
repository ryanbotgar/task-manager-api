module.exports = {
    // Exibe o formulário de criação de tarefas
    showTaskForm: function (req, res) {
      return res.view('pages/crudTaskForm');
    },
  
    // Criação de uma nova tarefa
    create: async function (req, res) {
      try {
        // Formata os dados 
        let formattedTaskData = {
          name: req.body.name,
          description: req.body.description,
          dueDate: req.body.dueDate,
          completed: req.body.completed || false
        };
  
        const newTask = await Task.create(formattedTaskData).fetch();
        
        return res.status(200).json({
          message: 'Tarefa criada com sucesso.',
          task: newTask
        });
      } catch (err) {
        sails.log(err);
        res.status(500).json({ error: 'Erro ao criar tarefa' });
      }
    },
  
    // Leitura de uma tarefa 
    read: async function (req, res) {
      try {
        const task = await Task.findOne({ id: req.params.id });
        if (!task) {
          throw new Error('Tarefa não encontrada.');
        }
        res.json(task);
      } catch (err) {
        sails.log(err);
        res.status(404).json({ message: 'Tarefa não encontrada.' });
      }
    },
  
    // Listagem de todas as tarefas
    list: async function (req, res) {
      try {
        const tasks = await Task.find();
        return res.json(tasks);
      } catch (err) {
        sails.log(err);
        res.status(500).json({ error: 'Erro ao listar tarefas' });
      }
    },
  
    // Atualização de uma tarefa 
    update: async function (req, res) {
      try {
        const updatedTask = await Task.updateOne({ id: req.params.id }).set(req.body);
        if (!updatedTask) {throw new Error('Tarefa não encontrada');}
        res.json({
          message: 'Tarefa atualizada com sucesso.',
          task: updatedTask
        });

      } catch (err) {
        sails.log(err);
        res.status(500).json({ error: err.message });
      }
    },
  
    // Exclusão de uma tarefa
    delete: async function (req, res) {
      try {
        const deletedTask = await Task.destroyOne({ id: req.params.id });
        if (!deletedTask) {throw new Error('Tarefa não encontrada');}
        res.json({ message: 'Tarefa excluída com sucesso.' });

      } catch (err) {
        sails.log(err);
        res.status(500).json({ error: err.message });
      }
    }
  };

//Fonte: KTERRA. Instruções. Repositório GitHub. Disponível em: https://github.com/kterra/Inteli-2024-1B/tree/main/instrucoes. Acesso em: 2 out. 2024.


