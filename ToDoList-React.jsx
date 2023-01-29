import { useState } from 'react';

const TodoList = () => {
//ToDoListを定義するアロー関数を用いた関数コンポーネント
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
        //変数Add taskを定義。初期値をTaskに設定する。AddNewTaskと書かれたInputタグでイベント発生時にHandleNewTaskを起動する。

        const handleNewTask = (event) => {
            setTask(event.target.value)
        }
        //定数HandleNewTaskを定義。イベント発生時にイベントが発生した場所のValue（おそらくTask）を取得する関数を実行する。
        //SetTaskとはなんだ。メソッドとはなんだ。関数と同じだが区別して呼んでいるらしい。

        const [todos, setTodos] = useState(initialState);
        //定数todos,とsetTodosは引数をinitialStateにしてuseStateという関数を行う

        <form onSubmit={handleSubmit}>
            //handleSubmitを変数として送信ボタンを押された時に起動するonSubmit関数を実行する
        Add Task :<input
            value={task}
            placeholder="Add New Task"
            onChange={handleNewTask}
        />
        //AddTaskをtaskという属性値を加え、PlaceholderにAdd new taskという文字を出し、
        //Inputタグの中身が変更された時にhandleNewTaskを実行するOnchange関数を実行する
        <button type="submit">Add</button>
        //Addと書かれているSubmitボタン
        </form>

    const handleSubmit = (event) => {
        //定数HandleSubmitをイベントを引数としたアロー関数として宣言する
        event.preventDefault()
        //Eventが発生したとき元になったフォームの機能を止める。
        if(task === '') return
        //Taskの値が空白の時に処理を止める。
        setTodos(todos => [...todos,{ task, isCompleted: false}])
        //変数SetTodosをTask値になにか入力されていたとき。Todosを参照して加える。
        //...に続く奴はスプレッド構文というもの。
        setTask('')
        //SetTaskで空白を表示する
    }

        <li key={ index }>{ todo.task } <span onClick={ () => handleRemoveTask(index) >X</span></li>
        //index属性を持つToDoのタスク値をもっている要素をリストとしてだす。
        //Span要素としてxも出す。クリックしたときにIndex要素を引数にhandleRemoveTaskも実行する。

        const handleRemoveTask = index => {
            const newTodos = [...todos].filter((todo,todoIndex) => todoIndex !== index);
            setTodos(newTodos)
        }
        //定数handleRemoveTasKはIndex要素を引数にしたアロー関数だ。
        //定数NewTodosはTodoのTodoIndex要素からIndex要素ではないTodoIndexを選択している。
        //SetTodos関数をNewtodosに実行



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
            //todosにmap関数を用いてTodo中のTask要素を引数にしてLi要素を作っている。
            //KeyはReactに使う識別子のようなもの直接的な意味はないらしい？
);
}

export default TodoList;