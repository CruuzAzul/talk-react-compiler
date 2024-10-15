import {Link} from "@tanstack/react-router";
import "../../styles/Navbar.css";
import {useThemeContext} from "../../utils/useTheme";
import {HexColorPicker} from "react-colorful";
import {Menu, MenuItem} from "@szhsin/react-menu";

export const Navbar = () => {
    const {theme, setTheme} = useThemeContext();

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/compils">Compils</Link>
                <Link to="/my-compils">My Compils</Link>
            </nav>
            <Menu menuButton={<button>Theme 🎨</button>}>
                <MenuItem>
                    <HexColorPicker color={theme} onChange={setTheme} style={{
                        paddingRight: "30px",
                    }}/>
                </MenuItem>
            </Menu>
        </header>
    );
};
