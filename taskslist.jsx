import React from 'react';
import Task from './task';
import Column from './column'

export default class TasksList extends React.PureComponent {

  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}