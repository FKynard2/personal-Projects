import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { useState } from "react";
import NavItems from "./NavItems";
import { TopToolBar, StyledInputBase } from "../../../Styling/StyledComponents";

const drawerWidth = 240;

function DrawerAppBar(props) {
    const [nav, setNav] = useState(NavItems);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Divider />
            <List>
                {nav.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <Link
                                to={item.path}
                                style={{
                                    color: "green",
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
            <AppBar
                sx={{
                    backgroundColor: "#0e2533",
                    justifyContent: "center",

                    position: "inherit",
                }}
                component="nav"
            >
                <TopToolBar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <StyledInputBase
                        sx={{ width: "30%" }}
                        placeholder="Search"
                        inputProps={{ "aria-label": "search" }}
                    />
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {nav.map((item) => (
                            <Link
                                to={item.path}
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                <Button key={item} sx={{ color: "#fff" }}>
                                    {item.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </TopToolBar>
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
