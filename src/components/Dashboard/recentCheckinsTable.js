// RecentCheckinsTable.js
import React, { useState } from 'react';
import { formatDate } from '../../components/helpers/Dashboard/dateHelpers'; 
import Pagination from '../../components/helpers/Pagination'; 

const RecentCheckinsTable = ({ recentCheckins }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recentCheckins.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="check-ins">
      <h2 style={{ textAlign: 'left' }}>Recent Check ins</h2>
      <table className="checkins-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Checkin Time</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(checkin => (
            <tr key={checkin._id}>
              <td>{checkin.name}</td>
              <td>{checkin.idNumber}</td>
              <td>{formatDate(checkin.checkin_time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination itemsPerPage={itemsPerPage} totalItems={recentCheckins.length} currentPage={currentPage} onPageChange={onPageChange} />
    </section>
  );
};

export default RecentCheckinsTable;
