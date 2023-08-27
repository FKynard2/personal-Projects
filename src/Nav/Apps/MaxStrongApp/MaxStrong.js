import Box from "@mui/material/Box";
import APPSNAV from "../AppsNav";
import { Link } from "react-router-dom";
import maxStrongImg from "../../../features/images/max strong.jpg";

export default function MaxStrong() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                }}
            >
                <APPSNAV />
                <img
                    style={{
                        width: "50%",
                        height: "65%",
                        margin: "auto",
                        objectFit: "cover",
                        border: "2px solid white",
                        borderRadius: "50%",
                        marginTop: "20px",
                    }}
                    src={maxStrongImg}
                    alt=""
                />
                <Box
                    sx={{
                        width: "50%",
                        margin: "auto",
                        padding: "50px",
                        textAlign: "center",
                        textDecoration: "none",
                    }}
                >
                    <Link
                        style={{
                            textDecoration: "none",
                            color: "white",
                            border: "3px solid",
                            padding: "10px 50px",
                            fontSize: "40px",
                            borderRadius: "20px",
                        }}
                        to={"/ThisApp"}
                    >
                        ENTER MaxStrong App
                    </Link>
                </Box>
            </Box>
        </>
    );
}
