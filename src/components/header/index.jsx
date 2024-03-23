import { NavLink } from "react-router-dom";
import { mainMenu } from "../../utils/consts";

export default function Header() {
  return (
    <header className="mt-5 p-10">
      <nav>
        <ul className="flex items-center justify-center gap-4">
          {mainMenu.map((item, index) => (
            <li
              className="text-sm font-medium text-[#D4D4D8] hover:underline transition-all tracking-normal"
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
