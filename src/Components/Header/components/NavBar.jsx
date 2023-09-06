import { ElementNavBar } from "./ElementNavBar";

export const NavBar = ({ data }) => {
  return (
    <div className="navbar flex-block">
      {data.map((el) => {
        return <ElementNavBar key={el.id} el={el} />;
      })}
    </div>
  );
};
