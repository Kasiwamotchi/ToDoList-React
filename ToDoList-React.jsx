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

        const [task, setTask] = useState('')
        //定数Taskの中のSetTaskに対して空白を保持する
        //フック機能ってなんだよ。今回はリアクトのフック機能でsTATE関数をつかっているらしい。Taskはもっている状態をもってくるものらしい。

        Add Task : <input value={ task } placeholder="Add New Task" onChange={handleNewTask}/>
        //変数Add taskを定義。初期値をTaskに設定するInputタグ

        const [todos, setTodos] = useState(initialState);
        //定数todos,とsetTodosは引数をinitialStateにしてuseStateという関数を行う
        return (
            <div>
                <h1>ToDo List</h1>
                //HTML要素のh1要素でToDo Listを出力する
                Add Task : <input placeholder="Add New Task" />
                //変数AddTaskをAddNewTaskと書かれたPlaceholder（入力前に出てくる文字）属性を持つインプットタグを持たせる
                <ul>
                { todos.map((todo, index) => (
                    <li key={ index }>{ todo.task }</li>
                ))}
                </ul>
            </div>
            //todosにmap関数を用いてTodo中のTask要素を引数にしてLi要素を作っている。KeyはReactに使う識別子のようなもの直接的な意味はないらしい？
);
}