import { NavLink } from "react-router-dom";
import { mainMenu } from "../../utils/consts";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <header className="mt-5 p-10 relative">
      <button
        className="hidden max-sm:block absolute top-0 left-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoIosArrowDown color="gray" />
      </button>

      <nav>
        <ul
          className={`  max-sm:p-2  max-sm:rounded-md max-sm:shadow-3xl
      sm:flex sm:items-center sm:justify-center gap-4 max-sm:absolute left-6 top-5 max-sm:grid max-sm:grid-flow-row max-sm:gap-2   ${
        !isOpen && "max-sm:hidden"
      }`}
        >
          {mainMenu.map((item, index) => (
            <li
              className="text-sm max-sm:text-xs font-medium text-[#D4D4D8] hover:text-neutral-500 transition-all tracking-normal"
              key={index}
            >
              <NavLink to={item.path} activeClassName="active">
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
