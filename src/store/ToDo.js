import {action, autorun, computed, makeObservable, observable, configure} from 'mobx';
import { v4 } from 'uuid';
import {fetchTodos} from '../apis/todoApi';

configure({
    enforceActions: "never",
})

const patchItemFromListById = (todos, id, patch) => {
  return todos.map((todo) => {
      if (todo.id === id) {
          for(let key in patch) {
            todo[key] = patch[key];
          }
      }
  });
}

export class TodoStore {
    constructor() {
      makeObservable(this, {
        todos: observable,
        addTodo: action,
        loadTodos: action,
        finish: action,
        redo: action,
        edit: action,
        remove: action,
        todosAmount: computed,
        report: computed,
      });
      autorun(() => console.log(this.report));
    }

    todos = [];

    get todosAmount() {
      return this.todos.filter(todo => todo.done === false).length;
    }
  
    get report() {
      return `there are ${this.todosAmount} task(s) to be done`;
    }

    async loadTodos() {
      const todos = await fetchTodos();
      todos.forEach((todo) => {
        this.todos.push(todo);
      });
    }

    finish(id) {
      patchItemFromListById(this.todos, id, {done: true})
    }

    redo(id) {
      patchItemFromListById(this.todos, id, {done: false})
    }

    edit(id, newTitle) {
      patchItemFromListById(this.todos, id, {title: newTitle})
    }

    remove(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
  
    addTodo(title) {
      this.todos.push({
        id: v4(),
        title: title,
        done: false
      });
    }
  }
                        