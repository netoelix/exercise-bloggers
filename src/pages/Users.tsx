import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import User from '../components/User';
import { users } from '../data';
import '../styles/Users.css';

export default function Users() {
  return (
    <div data-testid="users-page">
      <Header />
      <h1>Users</h1>
      <div className="users-list">
        {users.map((user) => (
          <>
            <User key={ user.id } userData={ user } />
            <Link to={ `/posts/${user.id}` } state={ user.id }>
              Posts
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
