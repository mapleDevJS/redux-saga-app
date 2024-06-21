import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import Card from './Card.jsx';

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const isLoading = loading;
  const noUsersAvailable = users.length === 0 && !loading;

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>;
    if (noUsersAvailable) return <p>No users available!</p>;
    if (error && !loading) return <p>{error}</p>;
    return users.map((user) => <Card key={user.id} user={user} />);
  };

  return (
      <>
        {renderContent()}
      </>
  );
}

export default Users;