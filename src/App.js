import TodoList from './todo-list'
import './App.css';
import {TodoStore} from './store/ToDo';

const todoStore = new TodoStore();

function App() {
  return (
    <div className="App">
      <TodoList todoStore = {todoStore}/>
    </div>
  );
}

export default App;
