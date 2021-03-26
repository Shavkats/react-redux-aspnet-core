import React, {Component} from "react";
import {connect} from "react-redux";
import {getCourses} from "../../actions/courseActions";

class Courses extends Component {
    constructor(props){
        super(props);

        this.handleCourseUpdate = this.handleCourseUpdate.bind(this);
        this.handleCourseDelete = this.handleCourseDelete.bind(this);

        this.state = {
            courses: [],
            loading: true,
            failed: false,
            error: ""
        }
    }

    componentDidMount(){
        this.props.getCourses();
    }

    componentDidUpdate(prevProps){
        if(prevProps.courses.data != this.props.courses.data){
            this.setState({courses: this.props.courses.data});
        }
    }

    handleCourseUpdate(id){
        const {history} = this.props;
        history.push("/update/" + id);
    }

    handleCourseDelete(id){
        const {history} = this.props;
        history.push("/delete/" + id);
    }

    getCoursesData(courses){
        return(
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Credits</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => {
                        return(
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.credits}</td>
                            <td>
                                <button onClick={() => this.handleCourseUpdate(course.id)} className="btn btn-primary btn-sm btn-block">Update</button>
                            </td>
                            <td>
                                <button onClick={()=> this.handleCourseDelete(course.id)} className="btn btn-danger btn-sm btn-block">Delete</button>
                            </td>
                        </tr>
                        )}
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let data = this.props.courses.loading ?
        (
            <p><em>Loading...</em></p>
        ) : (
            this.state.courses.length && this.getCoursesData(this.state.courses)
        );

        return (
            <div>
                <h2>2021-22 Academic Catalog</h2>
                {data}
            </div>
        )
    }
}

const mapStateToProps = ({courses}) => ({courses});

export default connect(mapStateToProps, {getCourses})(Courses);
