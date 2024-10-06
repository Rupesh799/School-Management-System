import FormModal from "@/components/FormModal";
import ListTable from "@/components/ListTable";
import Pagination from "@/components/Pagination";
import SearchTable from "@/components/SearchTable";
import { parentsData, role, studentsData} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiFilter, BiPlus } from "react-icons/bi";

import { FaTrash } from "react-icons/fa";

import { HiSortAscending } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md";

type Parent = {
  id: number;
  name: string;
  email?: string;
  phone: string;
  students:string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Students",
    accessor: "students",
    className: "hidden md:table-cell",
  },
 
  
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const StudentListPage = () => {
  const renderTableInfo = (items: Parent) => (
    <tr key={items.id} className="border-b border-gray-200 even:bg-primary-light/10 hover:bg-primary/10 text-sm">
      <td className="flex items-center gap-4 p-4">
        <Link href={`/list/teachers/${items.id}`} className="flex items-center gap-4">
          {/* <Image
            src={items.photo}
            alt="photo"
            height={40}
            width={40}
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          /> */}
          <div className="flex flex-col">
            <h1 className="font-semibold">{items.name}</h1>
            <p className="text-xs text-gray-500">{items?.email}</p>
          </div>
        </Link>
      </td>
      <td className="hidden md:table-cell">{items.students.join(",")}</td>
      <td className="hidden md:table-cell">{items.phone}</td>
      <td className="hidden md:table-cell">{items.address}</td>
      <td>
        <div className="flex items-center gap-2">
          
          <FormModal table="parent" type="update"/>

          {role == "admin" &&( 
            <FormModal table="parent" type="delete" id={items.id}/>
          )
          }
        </div>
      </td>
    </tr>
  );
  return (
    <div className="flex-1 p-4 bg-white  rounded-md flex flex-col gap-3 m-2 mt-0">
      {/* top */}
      <div className="flex justify-between items-center ">
        {/* right */}

        <h1 className="hidden md:block font-bold">All Parents</h1>
        {/* left */}
        <div className="flex flex-col md:flex-row gap-2 items-center w-full md:w-auto ">
          <SearchTable />
          <div className="flex items-center gap-2 self-end ">
            <div className="bg-primary-light h-8 w-8 rounded-full cursor-pointer flex items-center justify-center ">
              <BiFilter />
            </div>
            <div className="bg-primary-light h-8 w-8  rounded-full cursor-pointer flex items-center justify-center ">
              <HiSortAscending />
            </div>
            {role == "admin" && 
            // <div className="bg-primary-light p-1 rounded-full cursor-pointer ">
            //   <BiPlus />
            // </div>
            <FormModal type="create" table="parent"/>
            }
          </div>
        </div>
      </div>
      {/* list */}
        <ListTable columns={columns} renderTableInfo={renderTableInfo} data={parentsData}/>
      {/* pagination */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default StudentListPage;
