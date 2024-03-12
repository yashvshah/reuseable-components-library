import React from 'react'
import { DataTable } from '../components';
import { Link } from 'react-router-dom';

const DataTableExample = () => {
    const headers = ["Name", "Age", "Country"];

    const data = [
      {
        name: "John",
        age: 30,
        country: "USA",
      },
      {
        name: "Alice",
        age: 25,
        country: "INDIA",
      },
      {
        name: "Bob",
        age: 28,
        country: "UK",
      },
      {
        name: "Bob1",
        age: 28,
        country: "UK",
      },
    ];
  return (
    <div className='my-2'>
        <DataTable
          headers={headers}
          data={data}
          actions={(item) => (
            <div>
              <Link to={`/edit/${item.name}`}>Edit</Link>
              <button onClick={() => console.log("Delete", item)}>
                Delete
              </button>
            </div>
          )}
        />
    </div>
  )
}

export default DataTableExample