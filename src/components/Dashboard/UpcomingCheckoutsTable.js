// UpcomingCheckoutsTable.js
import React, { useState } from 'react';
import { formatDate, calculateTimeLeft } from '../../components/helpers/Dashboard/dateHelpers'; 
import Pagination from '../../components/helpers/General/Pagination'; 

const UpcomingCheckoutsTable = ({ upcomingCheckouts, userDetails, currentTime }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = upcomingCheckouts.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="checkouts">
      <h2 style={{ textAlign: 'left' }}>Upcoming Checkouts</h2>
      <table className="checkouts-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Checkin Time</th>
            <th>Time Left</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(checkout => (
            <tr key={checkout.id}>
              <td>{userDetails[checkout.user_id] ? userDetails[checkout.user_id].name : 'Loading...'}</td>
              <td>{userDetails[checkout.user_id] ? userDetails[checkout.user_id].idNumber : 'Loading...'}</td>
              <td>{formatDate(checkout.checkin_time)}</td>
              <td>{calculateTimeLeft(checkout.expiration_time, currentTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination itemsPerPage={itemsPerPage} totalItems={upcomingCheckouts.length} currentPage={currentPage} onPageChange={onPageChange} />
    </section>
  );
};

export default UpcomingCheckoutsTable;
