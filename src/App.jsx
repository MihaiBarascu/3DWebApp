import { Menubar } from "primereact/menubar";

import Hero from "./components/Hero";
const items = [
  {
    label: "Home",
  },
  {
    label: "About",
  },
  {
    label: "Work",
  },
  {
    label: "Contact",
  },
];

const start = (
  <span
    className="font-semibold  ml-4 pt-10
"
  >
    Mihai B.
  </span>
);
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
        className="rounded-none max-h-12"
        model={items}
        start={start}
      ></Menubar>
      <Hero />
    </>
  );
}

export default App;
