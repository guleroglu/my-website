import { FaGithub, FaLinkedin, FaStickyNote } from "react-icons/fa";
import Button from "../../../components/button";

export default function Footer() {
  return (
    <footer className="flex items-center gap-3">
      <button className="border border-[#171717] rounded-md p-4 flex items-center gap-3 w-full hover:bg-[#171717] transition-colors">
        <FaLinkedin />
        <Button
          target={"_blank"}
          href={"https://www.linkedin.com/in/mustafaguleroglu/"}
        >
          Linkedin
        </Button>
      </button>
      <button className="border border-[#171717] rounded-md p-4 flex items-center gap-3 w-full hover:bg-[#171717] transition-colors">
        <FaGithub />
        <Button target={"_blank"} href={"https://github.com/guleroglu"}>
          Github
        </Button>
      </button>
      <button className="border border-[#171717] rounded-md p-4 flex items-center gap-3 w-full hover:bg-[#171717] transition-colors">
        <FaStickyNote />
        <Button>Read.cv</Button>
      </button>
    </footer>
  );
}
