import React, { useMemo } from 'react';
import { Column, useTable } from 'react-table'
import { IUser } from '../../types/user';

type Props = {
  users: IUser[],
}

export const TABLE_COLUMNS: Column<IUser>[] = [
  {
    Header: 'Name', accessor: (row) => row.name.first
  },
  {
    Header: 'Large Image',
    accessor: (row) => row.picture.large,
    Cell: ({ value }: { value: string }) => <img alt="user large" src={value} />
  },
  {
    Header: 'Medium Image',
    accessor: (row) => row.picture.medium,
    Cell: ({ value }: { value: string }) => <img alt="user medium" src={value} />
  },
  {
    Header: 'Thumbnail Image',
    accessor: (row) => row.picture.thumbnail,
    Cell: ({ value }: { value: string }) => <img alt="user thumbnail" src={value} />
  },
  {
    Header: 'Coordinates',
    Cell: ({ row: { original } }: { row: { original: IUser } }) => {
      return <>
        <div>Latitude : {original.location.coordinates.latitude},</div>
        <div>Longitude : {original.location.coordinates.longitude}</div>
      </>
    }
  }
]

const UserTable: React.FC<Props> = ({ users }) => {
  const tableData = useMemo<IUser[]>(() => users, [users]);
  const columns = useMemo(() => TABLE_COLUMNS, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data: tableData })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UserTable;