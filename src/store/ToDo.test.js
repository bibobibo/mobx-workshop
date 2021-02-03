import {TodoStore} from './ToDo'

describe('ToDo', () => {
    it('should print report', async () => {
        const todoStore = new TodoStore();

        await todoStore.loadTodos();

        todoStore.addTodo("read MobX tutorial");

        todoStore.addTodo("try MobX");

        todoStore.todos[0].done = true;

        todoStore.todos[1].title = "try MobX in own project";

        todoStore.todos[0].title = "grok MobX tutorial";
    })
})