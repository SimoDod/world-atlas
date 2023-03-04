import classes from "./NavTool.module.css";

const NavTool = ({setSelectedColor}) => {
  return (
    <nav>
      <div className={classes.container}>
        <p>Pick a color:</p>
        <select onChange={(e) => setSelectedColor(e.target.value)}>
          <option>Green</option>
          <option>Gray</option>
          <option>Bisque</option>
          <option>Yellow</option>
          <option>Magenta</option>
        </select>
      </div>
    </nav>
  );
};

export default NavTool;
