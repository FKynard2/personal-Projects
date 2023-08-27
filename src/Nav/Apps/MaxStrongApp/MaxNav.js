import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavItems from "./MaxNavItems";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

const drawerWidth = 240;

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [nav, setNav] = useState(NavItems);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center", fontFamily: "Teko" }}
        >
            <Typography variant="h3" sx={{ my: 2 }}>
                Max<span style={{ fontWeight: "bold" }}>Strong</span>
            </Typography>
            <Divider />
            <List>
                {nav.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: "center", fontFamily: "Teko" }}
                        >
                            <Link
                                to={item.path}
                                style={{
                                    color: "blue",
                                    textDecoration: "none",
                                }}
                            >
                                <ListItemText primary={item.title} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    position: "sticky",
                    backgroundColor: "#1976d200",
                    boxShadow:
                        "0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 4px 5px 0px rgba(0,0,0,0), 0px 1px 10px 0px rgba(0,0,0,0);",
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h3"
                        component="div"
                        className="custom-typography"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                            color: "#111235",
                            fontFamily: "Teko",
                        }}
                    >
                        Max<span style={{ fontWeight: "bold" }}>Strong</span>
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <List
                            sx={{
                                display: "flex",
                                minWidth: "430px",
                                fontFamily: "Teko",
                            }}
                        >
                            {nav.map((item) => (
                                <ListItem key={item.title} disablePadding>
                                    <ListItemButton
                                        sx={{
                                            textAlign: "center",
                                            justifyContent: "center",
                                            fontFamily: "Teko",
                                        }}
                                    >
                                        <Link
                                            to={item.path}
                                            style={{
                                                color: "#111235",
                                                textDecoration: "none",
                                                fontFamily: "Teko",
                                            }}
                                        >
                                            <ListItemText
                                                className="custom-typography"
                                                sx={{ fontFamily: "Teko" }}
                                                primary={item.title}
                                            />
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
