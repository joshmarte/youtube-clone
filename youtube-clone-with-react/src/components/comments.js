import { Component } from "react";
import "./comments.css";

export default class Comments extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            userComment: "",
        }
    }

    handleUserInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <form onsubmit={(e) => this.props.handleSubmit(e, this.state.userName, this.state.userComment)}>
                <label htmlFor="users-name">Username</label>
                <input
                    onInput={this.handleUserInput}
                    value={this.state.userName}
                    type="text"
                    name="userName"
                    id="user-name"

                />
            </form>

        )

    }


}