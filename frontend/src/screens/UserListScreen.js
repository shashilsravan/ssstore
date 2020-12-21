import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError';
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import {listUsers, logout, deleteUser } from '../actions/userActions'
import Button from 'react-bootstrap/esm/Button';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function UserListScreen({location, history}) {
    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userDelete = useSelector(state => state.userDelete)
    const {success: successDelete } = userDelete

    useEffect(() => {
        if (!userInfo){
            history.push('/login')
        }
        if (userInfo && !userInfo.isAdmin){
            dispatch(logout())
        }
        else{
            dispatch(listUsers())
        }
    }, [dispatch, userInfo, history, successDelete])

    const deleteHandler = (id, isAdmin) => {
        if (isAdmin){
            confirmAlert({
                title: `Error Deleting`,
                message: `You cannot delete an Admin. First remove the user as Admin and then delete the user`,
                buttons: [
                    {
                        label: 'Ok',
                        onClick: () => console.log()
                    }
                ]
            })
        }
        else{
            confirmAlert({
                title: `Deleting user`,
                message: `Deleting user with userid ${id}`,
                buttons: [
                    {
                        label: 'Yes! Delete',
                        onClick: () => dispatch(deleteUser(id))
                    },
                    {
                        label: "No, Don't Delete",
                        onClick: () => console.log()
                    }
                ]
            })
        }
    }

    return (
        <div className="my-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to='/AdMIn'>Admin Panel</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        All Users
                    </li>
                </ol>
            </nav>
            <h5 className="mt-5">All Users: </h5>
            {loading 
                ? <Loader /> 
                : error 
                ? <AlertError error={error} />
                : (
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Id</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>
                                        {user.isAdmin ? 
                                        <strong>
                                            <i className="fas fa-user-shield mx-2"></i>
                                            {user.name}
                                        </strong>
                                        : user.name }
                                    </td>
                                    <td>{user._id}</td>
                                    <td>
                                        <a href={`mailto:${user.email}`}>
                                            {user.email}
                                        </a>
                                    </td>
                                    <td>
                                        {user.isAdmin 
                                        ? (<i className="fas fa-check" style={{color: 'green'}}> </i>)
                                        : (<i className="fas fa-times" style={{color: 'red'}}> </i>)}
                                    </td>
                                    <td>
                                        <Link to={`/AdMIn/user/${user._id}/edit`}>
                                            <Button variant="light" className="btn-sm">
                                                <i className="fas fa-edit"></i>
                                            </Button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Button variant='danger' className='btn-sm' 
                                        onClick={() => deleteHandler(user._id, user.isAdmin)}>
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )
                }
        </div>
    )
}
