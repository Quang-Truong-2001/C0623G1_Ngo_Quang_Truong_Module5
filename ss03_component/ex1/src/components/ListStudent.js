import {Component} from "react";

class ListStudent extends Component{
    constructor(props) {
        super(props);
        this.state ={
            students: [
                {
                    id: 1,
                    name: 'Nguyen Van A',
                    age: 20,
                    module: 5
                },{
                    id: 2,
                    name: 'Nguyen Van B',
                    age: 20,
                    module: 5
                },{
                    id: 3,
                    name: 'Nguyen Van C',
                    age: 20,
                    module: 5
                },{
                    id: 4,
                    name: 'Nguyen Van D',
                    age: 20,
                    module: 5
                },
            ]
        }
    }
    render() {
        return(
            <>
                <div className="container">
                    <h2>Danh sách học sinh</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Class</th>
                            <th scope="col">Module</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.students.map((student, index)=>(
                            <tr key={student.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.module}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default ListStudent;