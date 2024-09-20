// src/UserTable.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUsers, setLoading, setError } from './dataSlice';

const TableData = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.data);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(setLoading(true));
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                dispatch(setUsers(response.data));
            } catch (err) {
                dispatch(setError(err.message));
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchData();
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableData;
