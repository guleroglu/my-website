import Header from "../../components/header";
import Footer from "./footer";
import Slider from "./slider";

export default function About() {
  return (
    <div>
      <Header />
      <section className="mt-1">
        <h1 className="text-center text-2xl uppercase font-semibold tracking-wider">
          About Me
        </h1>
        <p className="my-4">Hey I'm Mustafa 👋</p>

        <div>
          <p>
            I am a frontend developer, and my passion is to ensure that users
            have a better experience in the digital world. My focus is on
            designing and developing user-friendly, impactful, and accessible
            interfaces.
          </p>
          <hr className="border-none h-px bg-[#28272B] my-10" />
          <p className="my-5">
            I am constantly improving myself, especially in the fields of user
            interface design and user experience. Applying my knowledge and
            skills in these areas motivates me to make my projects more
            effective and user-friendly.
          </p>
          <p>
            Developing projects and receiving feedback is something I absolutely
            love, as it greatly motivates me and inspires me to continuously
            improve myself.
          </p>
        </div>
        <Slider />
        <Footer />
      </section>
    </div>
  );
}
