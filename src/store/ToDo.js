import {action, autorun, computed, makeObservable, observable, configure} from 'mobx';
import { v4 } from 'uuid';
import {fetchTodos} from '../apis/todoApi';

configure({
    enforceActions: "never",
})

export class TodoStore {
    constructor() {
      makeObservable(this, {
        todos: observable,
        addTodo: action,
        loadTodos: action,
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
  
    addTodo(title) {
      this.todos.push({
        id: v4(),
        title: title,
        done: false
      });
    }
  }
                        