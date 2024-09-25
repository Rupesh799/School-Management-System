import Link from "next/link";
import {
  BiBook,
  BiCalendar,
  BiData,
  BiExit,
  BiHome,
  BiMessage,
  BiPaperPlane,
} from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CgEditBlackPoint, CgProfile, CgWorkAlt } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { GiTeacher } from "react-icons/gi";
import { MdAnnouncement, MdOutput, MdRoom } from "react-icons/md";
import { PiStudent } from "react-icons/pi";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: BiHome,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: GiTeacher,
        label: "Teachers",
        href: "/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: PiStudent,
        label: "Students",
        href: "/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: BsPerson,
        label: "Parents",
        href: "/parents",
        visible: ["admin", "teacher"],
      },
     
      {
        icon: MdRoom,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: BiData,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: BiPaperPlane,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: CgWorkAlt,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
   
      {
        icon: CgEditBlackPoint,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: BiCalendar,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: BiMessage,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: MdAnnouncement,
        label: "Announcement",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: CgProfile,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: CiSettings,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: BiExit,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm ">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2">
          <span className="hidden lg:block font-light  text-gray-600">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-3 text-gray-500  hover:text-primary-light   py-[0.2rem] "
            >
              {/* <Image src={<item.icon/>} alt="navitems" height={20} width={20}/> */}
              <item.icon size={20} />
              <span className="hidden lg:block font-bold">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
