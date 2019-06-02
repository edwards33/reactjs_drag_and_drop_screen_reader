const initData = {
  tasks: {
    'task01': {id: 'task01', content: '1. Task'},
    'task02': {id: 'task02', content: '2. Task'},
    'task03': {id: 'task03', content: '3. Task'},
  },
  columns: {
    'column01':{
      id: 'column01',
      title: 'ToDo',
      taskIds: ['task01', 'task02', 'task03']
    },
    'column02':{
      id: 'column02',
      title: 'In Progress',
      taskIds: []
    },
  },
  columnOrder: ['column01', 'column02']
};

export default initData;