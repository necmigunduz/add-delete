import React, { Component } from 'react'

export default class Users extends Component {
    render() {
        return (
            <div className="card">
                <h4>Add New User</h4>
                <table>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name'
                                    className='form-control'
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
