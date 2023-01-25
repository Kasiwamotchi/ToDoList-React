import ToDoList from './components/TodoList';
function App() {
    return (
        <div style={{ margin: "2em"}}>
            </ToDoList>
        </div>
    );
}

//関数コンポーネントのfunction関数式で書いているらしい cssを入れているようだ
//TodoListをMargin2emで表示する関数っぽい
export default App;
//App関数をimportできるようにした宣言か？

import { useState } from 'react';

const TodoList = () => {
//ToDolistを定義するアロー関数を用いた関数コンポーネント
        const initialState = [
            //定数initialStateの定義
            {
                task: 'Learn React',
                isCompleted: false
                //変数に名前をつけている。task変数にLearn Reactという文字列を。isCompleted変数にfalseという値を着けている

            },
            {
                task: 'Learn React Hook',
                isCompleted: false
                //やってることは上と同じ
            },
            {
                task: 'Learn Gatsby.js',
                isCompleted: false
                //やってることは2つ上と同じ
            },
        ]
        const [todos, setTodos] = useState(initialState);
        //定数todos,とsetTodosは引数をinitialStateにしてuseStateという関数を行う
        return (
            <div>
                <h1>ToDo List</h1>
                <ul>
                { todos.map((todo, index) => (
                    <li key={ index }>{ todo.task }</li>
                ))}
                </ul>
            </div>
            //HTML要素のh1要素でToDo Listを出力する
);
}