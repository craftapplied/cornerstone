import SwitcherDarkMode from "../../SwitcherDarkMode";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <header>
        <div class="container flex items-center">
          <Navigation />
          <SwitcherDarkMode />
        </div>
      </header>
    </>
  );
}
