import { Outlet,NavLink } from "react-router-dom";
import { ImStatsBars } from "react-icons/im";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaDna } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { TbDropletCancel } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
export default function Dashboard() {
  const dashBoadNavLinks = [
    {icon:<ImStatsBars/>, label: "Stats", link: "/dashboard/stats" },
    {icon:<BiSolidDonateBlood/>, label: "Requests", link: "/dashboard/all-requests" },
    {icon:<FaDna/>, label: "Pending Donations", link: "/dashboard/pending-donations" },
    {icon:<IoMdDoneAll/>, label: "Donations", link: "/dashboard/all-donations" },
    {icon:<TbDropletCancel/>, label: "Rejected Requests", link: "/dashboard/rejected-requests" },
    {icon:<FaUsers/>, label: "Donors", link: "/dashboard/all-donors" },
  ]
  return (
    <div className="flex flex-col md:flex-row bg-bgStart">
      <div className="md:w-1/4 bg-primary/10 px-4 md:h-screen">
        <div className="py-2">
          <h2 className="text-2xl font-bold text-primary hidden md:block">Dashboard</h2>
          <ul className="flex md:flex-col gap-4 justify-center md:justify-start md:items-start items-center py-4">
            {dashBoadNavLinks.map((link, index) => (
              <li key={index} className="">
                
                <NavLink
                  to={link.link}
                  className="text-lg font-semibold text-textPrimary flex items-center justify-start gap-2"
                  activeClassName="text-primary"
                >
                <span className="text-primary text-xl p-2 bg-primary/20 rounded-md shadow-md">{link.icon}</span>
                  <p className="hidden md:block">{link.label}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:w-3/4 md:pl-4">
      <Outlet />
      </div>
    </div>
  );
}
