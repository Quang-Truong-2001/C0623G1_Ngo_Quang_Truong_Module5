import {Component} from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {
                    id: 1,
                    name: 'Ăn'
                },
                {
                    id: 2,
                    name: 'học'
                }
            ],
            item: {}
        }
    }

    addWork = (value) => {
        this.setState({item: {id: this.state.todoList.length + 1, name: value}})
    }
    addWorkItem = () => {
        this.setState({...this.state, todoList: [...this.state.todoList, this.state.item]})
    }

    render() {
        return (
            <>
                <input onChange={(event) => this.addWork(event.target.value)}/>
                <button onClick={this.addWorkItem}>Thêm</button>
                <div>
                    <table border='1px'>
                        <tr>
                            <th>STT</th>
                            <th>Công việc</th>
                        </tr>
                        {this.state.todoList.map((work, index) => (
                            <tr key={work.id}>
                                <th>{index + 1}</th>
                                <th>{work.name}</th>
                            </tr>
                        ))}
                    </table>
                </div>
            </>
        )
    }

}

export default TodoList;
