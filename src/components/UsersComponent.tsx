import * as React from "react";
import {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getUsers} from '../redux/actions/users-action';
import Card from './CardComponent';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state:any) => state.users.users);
  const loading = useSelector((state: any) => state.users.loading);
  const error = useSelector((state:any) => state.users.error);

  useEffect(() => {
    dispatch(getUsers([]));
  }, [dispatch]);

  return (
    <>
      {users.loading && <p>Loading...</p>}
      {users.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
      {users.length > 0 && users.map((user: any) => (
        <Card key={user.id} user={user} />
      ))}
    </>
  );
};

export default Users;
