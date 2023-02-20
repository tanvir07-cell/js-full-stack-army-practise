import classes from "./Layout.module.css";
import { Link } from "@reach/router";

function Layout({ children }) {
  const path = window.location.pathname;
  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <div>
          <h3>Tanvir Rifat</h3>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>
              <Link
                to="/"
                className={
                  path === "/" ? classes.navActiveItem : classes.navItem
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  path === "/about" ? classes.navActiveItem : classes.navItem
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className={
                  path === "/help" ? classes.navActiveItem : classes.navItem
                }
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className={classes.main}>{children}</main>

      <footer className={classes.footer}>
        <div>
          <h3>This is the footer</h3>
        </div>
        <div>
          <ul>
            <li>footer1</li>
            <li>footer2</li>
            <li>footer3</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
