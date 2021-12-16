import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

const TASKS = [
  {
    id: 1,
    text: 'Mow the lawn',
    done: false,
  },
  {
    id: 2,
    text: 'Cook Pasta',
    done: true,
  },
];

const App = () => {
  const [taskState, updateTaskState] = useState(TASKS);

  const toggleTaskComplete = (id) => {
    const newTasks = taskState.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          text: task.text,
          done: !task.done,
        };
      }
      return task;
    });

    updateTaskState(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList completedCallback={toggleTaskComplete} tasks={taskState} />
        </div>
      </main>
    </div>
  );
};

export default App;
