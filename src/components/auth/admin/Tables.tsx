import Breadcrumb from './Breadcrumbs/Breadcrumb';
import TableOne from './Tables/TableOne';
import TableThree from './Tables/TableThree';
import TableTwo from './Tables/TableTwo';
import React from 'react';
const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </>
  );
};

export default Tables;
