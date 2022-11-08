import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Button,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        border: "10px solid blue",
        padding: "40px",
        margin: "20px 20px 20px 20px",
        height: "580px",
      }}
    >
      {/* <Box
        style={{ border: "5px solid blue", padding: "10px", height: "550px" }}
      > */}
      <Typography
        variant="h1"
        style={{ fontSize: "80px", fontWeight: "bold", color: "blue" }}
      >
        Flamecloud Figmaui
      </Typography>
      <Box>
        <img style={{ height:"200px"}}
          src="https://media-exp1.licdn.com/dms/image/C560BAQE-AVRC1Yk-3A/company-logo_200_200/0/1589019883731?e=2147483647&v=beta&t=5Jd0jfWLW3oCkextvTmubrFnlU_G3tA-KlsZWc86N8M"
          alt=""
        />
      </Box>
      <Stack
        spacing={2}
        direction="row"
        // w={"100vw"}
        // h={"100vh"}
        marginTop={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          m={"1rem"}
          variant="contained"
          onClick={() => navigate("/signup")}
        >
          Signup
        </Button>
        <Button
          m={"1rem"}
          variant="contained"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Stack>
      {/* </Box> */}
    </Box>
  );
}
