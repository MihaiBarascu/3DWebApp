import { Menubar } from "primereact/menubar";
import { animateScroll as scroll } from "react-scroll";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import { useMediaQuery } from "react-responsive";

const start = <span className="font-semibold ml-4 pt-10">Mihai B.</span>;

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const items = [
    {
      label: "Home",
      command: (event) => {
        event.originalEvent.preventDefault();

        scroll.scrollToTop({
          duration: 800,
          smooth: "easeInOutQuad",
        });
      },
    },
    {
      label: "About",
      command: () => {
        scroll.scrollTo(window.innerHeight, {
          duration: 800,
          smooth: "easeInOutQuad",
        });
      },
    },
    {
      label: "Technologies",
      command: () => {
        scroll.scrollTo(
          isMobile ? window.innerHeight * 3 : window.innerHeight * 2,
          {
            duration: 1000,
            smooth: "easeInOutQuad",
          }
        );
      },
    },
  ];
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
        className="fixed w-full top-0 left-0 z-50 rounded-none max-h-12 opacity-90"
        model={items}
        start={start}
      ></Menubar>

      <Hero />

      <About />
      <Technologies />
    </>
  );
}

export default App;
