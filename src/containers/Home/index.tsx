import { useCallback, useState } from 'react'
import { Map, UserList } from '../../components'
import { APP_NAME, COMPANY_URL } from '../../constants';
import { getUsers } from '../../services/user';
import { IUserList } from '../../types/user';


import './style.scss'

const Home = () => {
  const [loading, toggleLoading] = useState<boolean>(false);
  const [showUserList, toggleShowUserList] = useState<boolean>(false);
  const [userList, setUserList] = useState<IUserList>();
  const [error, setError] = useState<string>('');

  const mapClickHandler: L.LeafletMouseEventHandlerFn = useCallback(async (e) => {
    setUserList(undefined);
    toggleShowUserList(true);
    try {
      toggleLoading(true);

      const users = await getUsers(e.latlng);
      setUserList(users);
    } catch (error) {
      setError((error as Error).message)
    } finally {
      toggleLoading(false);
    }

  }, []);

  return <div className="Home">
    <h1 onClick={() => window.location.href = COMPANY_URL}>{APP_NAME}</h1>

    <Map onClick={mapClickHandler} />

    <UserList
      loading={loading}
      error={error}
      visible={showUserList}
      users={userList}
      onClose={() => toggleShowUserList(false)} />
  </div>
}

export default Home;
