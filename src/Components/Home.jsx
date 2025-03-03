import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const scrollToAbout = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollArrow = document.getElementById("scrollArrow");
    if (scrollArrow) {
      scrollArrow.addEventListener("click", scrollToAbout);
    }

    return () => {
      if (scrollArrow) {
        scrollArrow.removeEventListener("click", scrollToAbout);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white"
    >
      <h1 className="text-4xl font-bold">Prabhudasu Parusu</h1>
      <p className="text-lg mt-2">Fresher | Aspiring Animator</p>

      <button
        id="scrollArrow"
        className="mt-10 text-4xl animate-bounce cursor-pointer"
      >
        ⬇
      </button>
    </section>
  );
};

export default Home;
