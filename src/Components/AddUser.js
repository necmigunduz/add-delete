import React, { Component } from 'react'

export default class Users extends Component {
    state = {
        name: "",
        email: ""
    }
    render() {
        const {name,email} = this.state;
        onChangeName(e){
            this.setState({
               [    e.target.name] : e.target.value
            })
        };
        onChangeEmail(){
            this.setState({
                [e.target.email] : e.target.value
            })
        };
        onSubmitAdd(e){
            e.preventDefault();
            const {addUser} = this.props;
            const {name,email} = this.state;
            const newUser ={
                id: Math.random(),
                name: name,
                email: email
            }
            addUser(newUser);
        };
        return (
            <div className="card">
                <h4>Add New User</h4>
                <table>
                    <div className="card-body">
                        <form onSubmit={this.onSubmitAdd.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name'
                                    className='form-control'
                                    value={name}
                                    onChange={this.onChangeName.bind(this)}
                                />
                            </div>
                            <br/>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type='text'
                                    name='email'
                                    id='email'
                                    placeholder='Enter Your Email'
                                    className='form-control'
                                    value={email}
                                    onChange={this.onChangeEmail.bind(this)}
                                />
                            </div>
                            <br/>
                            <div className="d-grid gap-2">
                                <button type='submit' className='btn btn-danger'>Add New User</button>
                            </div>
                        </form>
                    </div>
                </table>
            </div>
        )
    }
}
