import Header from "../../components/header";
import avatar from "../../assets/avatar.png";
import TypedText from "../../components/typedtext";
import Contact from "../../components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-3 justify-center items-center py-24">
        <img
          width={150}
          height={150}
          className="rounded-full object-cover"
          src={avatar}
          alt="avatar"
        />
        <div className="mt-5">
          <TypedText />
        </div>
        <div className="flex mt-5 gap-3">
          <Contact href={"mailto:must60yyy@gmail.com"}>Email</Contact>
          <Contact
            target={"_blank"}
            href={"https://www.linkedin.com/in/mustafaguleroglu/"}
          >
            Linkedin
          </Contact>
          <Contact target={"_blank"} href={"https://github.com/guleroglu"}>
            Github
          </Contact>
        </div>
      </section>
    </>
  );
}
