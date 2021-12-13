import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            comment: "",
            savedComments: [],
            };
    }

    handleChange=(event)=>{
      //dynamic
            this.setState({
                [event.target.name]: event.target.value});
        }

    handleSubmit=(event)=>{
        event.preventDefault();

        const { fullName, comment} = this.state;

        this.setState({
            savedComments:[...this.state.savedComments, {fullName,comment}]
            })

        }

    render(){

        const commentList = this.state.savedComments.map((obj,i)=> <div key= {"key"+i}><h3>{obj.fullName}</h3><div>{obj.comment}</div></div>)

        return(
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" value={this.state.fullName} onChange={this.handleChange} id="name" name="fullName"/><br></br>
                    <label htmlFor="comment">Comment:</label>
                    <input type="text" value={this.state.comment} onChange={this.handleChange} id="comment" name="comment"/><br></br>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    {commentList}
                </div>
            </section>
        )
    }
}

export default Comments

