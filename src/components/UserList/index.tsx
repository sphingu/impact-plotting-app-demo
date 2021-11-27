import React from 'react'
import UserTable from './UserTable'

import { IUserList } from '../../types/user'

import './style.scss'

type Props = {
  visible?: boolean
  loading?: boolean;
  error?: string;
  users?: IUserList,
  onClose?: () => void
}

const UserList: React.FC<Props> = ({ visible, loading, error, users, onClose }) => {
  const renderChildren = () => {
    if (loading) {
      return 'Loading Data ...';
    }
    if (error) {
      return <div className="error">{error}</div>
    }
    if (!users?.results.length) {
      return <div>No records found</div>
    }

    return <UserTable users={users.results} />
  }

  return <div className={`UserList ${visible ? 'show' : ''}`}>
    <div className="close" onClick={onClose}>x</div>
    {renderChildren()}
  </div>
}

UserList.defaultProps = {
  visible: false,
  loading: false,
  error: '',
  users: { results: [] }
}

export default UserList