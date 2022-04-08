import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projects', {
  state: () => {
    return {
      projects: [
        {
          title: 'Inbox',
          id: 'inbox',
          description: 'Hello world!',
          tasks: [
            { title: 'This is a task', done: false },
            { title: 'This is also a task, but it is done', done: true },
          ],
        },
        {
          title: 'Home',
          id: '123',
          description: 'Home!',
          tasks: [
            { title: 'This is a task', done: false },
            { title: 'This is also a task, but it is done', done: true },
          ],
        },
      ],
    };
  },
  actions: {
    createTask(projectID) {
      const newTask = {
        title: 'Hello there',
        done: false,
      };
      this.projects[projectID].tasks.push(newTask);
    },
    toggleTaskDone(projectID, taskID) {
      this.projects[projectID].tasks[taskID].done =
        !this.projects[projectID].tasks[taskID].done;
    },
  },
});