import { Menubar } from "primereact/menubar";
import { Link, animateScroll as scroll } from "react-scroll";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
const items = [
  {
    label: "Home",
    command: (event) => {
      event.originalEvent.preventDefault();

      scroll.scrollToTop({
        duration: 500,
        smooth: "easeInOutQuad",
      });
    },
  },
  {
    label: "About",
    command: () => {
      scroll.scrollTo(window.innerHeight, {
        duration: 500,
        smooth: "easeInOutQuad",
      });
    },
  },
  {
    label: "Work",
    command: () => {
      scroll.scrollTo(window.innerHeight * 2, {
        duration: 500,
        smooth: "easeInOutQuad",
      });
    },
  },
  {
    label: "Contact",
    command: () => {
      scroll.scrollTo("contact-section", {
        duration: 500,
        smooth: "easeInOutQuad",
      });
    },
  },
];

const start = <span className="font-semibold ml-4 pt-10">Mihai B.</span>;

function App() {
  return (
    <>
      <Menubar
        pt={{
          menu: { className: "ml-auto text-xs " },
          end: {
            className: "ml-auto flex items-center",
          },
          button: {
            className: "ml-auto",
          },
        }}
        className="fixed w-full top-0 left-0 z-50 rounded-none max-h-12"
        model={items}
        start={start}
      ></Menubar>

      <Hero />

      <About />
      <Work />
    </>
  );
}

export default App;
