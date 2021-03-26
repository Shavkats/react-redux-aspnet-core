import React, {Component} from "react";
import axios from "axios";

class UpdateCourse extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdateCancel = this.handleUpdateCancel.bind(this);

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

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleUpdateCancel(){
        const {history} = this.props;
        history.push("/courses");
    }

    handleSubmit = e => {
        e.preventDefault();
        const {history} = this.props;
        const {id} = this.props.match.params;

        let course = {
            id: parseInt(this.state.id),
            title: this.state.title,
            description: this.state.description,
            credits: parseInt(this.state.credits)
        }

        axios.put("api/Courses/updateCourse/" + id, course)
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
                        id="description"
                        type="text"
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
                    <button onClick={this.handleUpdateCancel} className="btn btn-secondary">Cancel</button>
                </form>
            </div>
        )
    }
}

export default UpdateCourse;
