import React from "react";

const ListTable = ({
  columns,
  renderTableInfo,
  data,
}: {
  columns: {
    header: string;
    accessor: string;
    className?: string;
  }[];
  renderTableInfo:(items:any)=>React.ReactNode; // this is used when we have to pass html elements
  data:any[];
}) => {
  return (
    <table className="w-full mt-4 text-sm text-gray-500">
      <thead className="">
        <tr className="text-left text-sm">
            
            {columns.map((column) => (
            <th key={column.accessor} className={column.className}>{column.header}</th>
          ))}
            
          
        </tr>
      </thead>
      <tbody >{data.map((items)=>renderTableInfo(items))}</tbody>
    </table>
  );
};

export default ListTable;
