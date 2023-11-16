import {Component} from "react";

class ListStudent extends Component{
    constructor(props) {
        super(props);
        this.state={
            students: [
                {
                    company: 'Alfreds Futterkiste',
                    contact: 'Maria Anders',
                    country: 'Germany'
                },
                {
                    company: 'Centro comercial Moctezuma',
                    contact: 'Francisco Chang',
                    country: 'Mexico'
                },
                {
                    company: 'Ernst Handel',
                    contact: 'Roland Mendel',
                    country: 'Austria'
                },
                {
                    company: 'Island Trading',
                    contact: 'Helen Bennett',
                    country: 'UK'
                },
                {
                    company: 'Laughing Bacchus Winecellars',
                    contact: 'Yoshi Tannamuri',
                    country: 'Canada'
                },
                {
                    company: 'Magazzini Alimentari Riuniti',
                    contact: 'Giovanni Rovelli',
                    country: 'Italy'
                }
            ]
        }
    }
    render() {
        return(
            <>
                {this.state.students.map((student)=>(
                    <tr>
                        <th>{student.company}</th>
                        <th>{student.contact}</th>
                        <th>{student.country}</th>
                    </tr>
                ))}
            </>
        )
    }
}
export default ListStudent;