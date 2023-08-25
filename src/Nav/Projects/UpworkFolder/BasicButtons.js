import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ALT_STYLES } from "../../../Styling/StyledComponents";

export default function BasicButtons({
    catgories,
    setJobSelected,
    jobSelected,
}) {
    return (
        <Stack
            className="button-stack"
            spacing={1}
            sx={{ alignItems: "start" }}
        >
            {catgories.map((btnText, idx) => (
                <Button
                    className="cat-button"
                    variant="text"
                    key={idx}
                    onClick={() => {
                        setJobSelected(btnText);
                    }}
                    sx={
                        btnText === jobSelected
                            ? ALT_STYLES
                            : {
                                  color: "black",
                                  fontWeight: "bold",
                                  paddingInline: "0px",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                              }
                    }
                >
                    {btnText}
                </Button>
            ))}
        </Stack>
    );
}
