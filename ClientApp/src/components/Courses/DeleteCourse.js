import React, {Component} from "react";
import axios from 'axios';

class DeleteCourse extends Component {
    constructor(props){
        super(props)

        this.handleDeleteCancel = this.handleDeleteCancel.bind(this);
        this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);

        this.state = {
            id: "",
            title: "",
            description: "",
            credits: ""
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;

        axios.get("api/Courses/SingleCourse/" + id)
            .then(course => {
                const response = course.data;
                this.setState({
                    id: response.id,
                    title: response.title,
                    description: response.description,
                    credits: response.credits
                })
            })
            .catch(err => console.log(err));
    }

    handleDeleteCancel(e){
        const {history} = this.props;
        history.push("/courses")
    }

    handleDeleteConfirm(e){
        const {id} = this.props.match.params;
        const {history} = this.props;

        axios.delete("api/Courses/DeleteCourse/" + id)
            .then(result => {
                history.push("/courses")
            })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h2>Course confirmation</h2>
                <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{this.state.title}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Course number: {this.state.id}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Course credits: {this.state.credits}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Description:</h6>
                    <p class="card-text">{this.state.description}</p>
                    <button onClick={this.handleDeleteConfirm} class="btn btn-danger mr-2">
                        Delete
                    </button>
                    <button onClick={this.handleDeleteCancel} class="btn btn-secondary">
                        Cancel
                    </button>

                </div>
                </div>
            </div>
        )
    }
}

export default DeleteCourse;
