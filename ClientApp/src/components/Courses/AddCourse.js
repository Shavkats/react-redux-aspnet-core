import React, {Component} from "react";
import axios from "axios";

class AddCourse extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

        this.state = {
            id: "",
            title: "",
            description: "",
            credits: ""
        }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleCancel(){
        const {history} = this.props;
        history.push("/courses")
    }

    handleSubmit = e => {
        e.preventDefault();
        const {history} = this.props;

        let course = {
            id: parseInt(this.state.id),
            title: this.state.title,
            description: this.state.description,
            credits: parseInt(this.state.credits)
        }

        axios.post("api/Courses/AddCourse", course)
            .then(result => {
                history.push("/courses");
            });
    }

    render() {
        const {id, title, description, credits} = this.state;
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">Number</label>
                    <div className="field">
                    <input
                        id="id"
                        type="text"
                        name="id"
                        className="form-control"
                        onChange={this.handleChange}
                        value={id}
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <div className="field">
                    <input
                        id="title"
                        type="text"
                        name="title"
                        className="form-control"
                        onChange={this.handleChange}
                        value={title}
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <div className="field">
                    <textarea
                        type="text"
                        id="description"
                        rows="3"
                        name="description"
                        className="form-control"
                        onChange={this.handleChange}
                        value={description}
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="credits">Credits</label>
                    <div className="field">
                    <input
                        id="credits"
                        type="text"
                        name="credits"
                        className="form-control"
                        onChange={this.handleChange}
                        value={credits}
                    />
                    </div>
                </div>
                <button type="submit" className="btn btn-success mr-2">Save</button>
                <button onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                </form>
            </div>
        )
    }
}

export default AddCourse;
