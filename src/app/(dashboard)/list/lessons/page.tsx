import FormModal from "@/components/FormModal";
import ListTable from "@/components/ListTable";
import Pagination from "@/components/Pagination";
import SearchTable from "@/components/SearchTable";
import { classesData, lessonsData, parentsData, role, studentsData, subjectsData} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiFilter, BiPlus } from "react-icons/bi";

import { FaTrash } from "react-icons/fa";

import { HiSortAscending } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md";

type Lesson = {
  id: number;
  subject: string;
  class:string;
  teacher:string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Class Name",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher Name",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

const LessonListPage = () => {
  const renderTableInfo = (items: Lesson) => (
    <tr key={items.id} className="border-b m-3 border-gray-200 even:bg-primary-light/10 hover:bg-primary/10 text-sm ">
      
      <td className="">{items.subject}</td>
      <td className="hidden md:table-cell">{items.class}</td>
      <td className="hidden md:table-cell">{items.teacher}</td>
      <td>
        <div className="flex items-center gap-2 py-3">
        {role == "admin" && (
            <>
          <FormModal table="lesson" type="update" data={items}/>

            <FormModal table="lesson" type="delete" id={items.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="flex-1 p-4 bg-white  rounded-md flex flex-col gap-3 m-2 mt-0">
      {/* top */}
      <div className="flex justify-between items-center ">
        {/* right */}

        <h1 className="hidden md:block font-bold">All Lessons</h1>
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
            <FormModal table="lesson" type="create"/>
            }
          </div>
        </div>
      </div>
      {/* list */}
        <ListTable columns={columns} renderTableInfo={renderTableInfo} data={lessonsData}/>
      {/* pagination */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default LessonListPage;
