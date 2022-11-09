import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  TextField,
  Avatar,
  Select,
  IconButton,
} from "@mui/material";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Dashboard = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [categoryHandler, setCategoryHandler] = useState("");
  const [, pointerHandler, setPointerHandler] = useState("");
  const [marketingData, setMarketingData] = useState([]);
  const [designData, setDesignData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [pointerData, setPointerData] = useState([]);
  const [planName, setPlanName] = useState("");
  const [pointerName, setPointerName] = useState("");
  const [marketingDataModal, setMarketingDataModal] = useState([]);
  const [designDataModa, setDesignDataModal] = useState([]);
  const [salesDataModal, setSalesDataModal] = useState([]);

  console.log(marketingDataModal, designDataModa, salesDataModal);



  const marketDataAdd = (newData) => {
    setMarketingData([...marketingData, newData]);
  };

  const designDataAdd = (newData) => {
    setDesignData([...designData, newData]);
  };

  const salesDataAdd = (newData) => {
    setSalesData([...salesData, newData]);
  };

  const pointerDataAdd = (newPointer) => {
    setPointerData([...pointerData, newPointer]);
  };


  const handlePlanOpen = () => {
    setOpen(true);
  };
  const handlePlanOpen1 = () => {
    setOpen1(true);
  };
  const handlePlanOpen2 = () => {
    setOpen2(true);
  };
  const handlePlanClose = () => {
    setOpen(false);
  };
  const handlePlanClose1 = () => {
    setOpen1(false);
  };
  const handlePlanClose2 = () => {
    setOpen2(false);
  };

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'
  
  const handleModalSecond = () => {
    if (categoryHandler == "Marketing") {
      marketDataAdd(planName);
      handlePlanOpen2();
    } else if (categoryHandler == "Design") {
      designDataAdd(planName);
      handlePlanOpen2();
    } else if (categoryHandler == "Sales") {
      salesDataAdd(planName);
      handlePlanOpen2();
    } else {
      alert("Please Choose Department");
    }
  };
  console.log(marketingData, designData, salesData);

  const handleModalThird = () => {
    pointerDataAdd(pointerName);
    handlePlanClose2();
    handlePlanClose1();
    console.log(pointerData);
  };

  const teamMates = [
    {
      name: "Md",
      img: "https://yt3.ggpht.com/ahIlOKEYP4MBeS-f-gvkb2CxJgknA7WQQsbi3y3JzFW9I1rcPGr803gYA6kCV6vEQZWst0nvhg=s88-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "Naushad",
      img: "https://yt3.ggpht.com/ahIlOKEYP4MBeS-f-gvkb2CxJgknA7WQQsbi3y3JzFW9I1rcPGr803gYA6kCV6vEQZWst0nvhg=s88-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "Ahamed",
      img: "https://yt3.ggpht.com/ahIlOKEYP4MBeS-f-gvkb2CxJgknA7WQQsbi3y3JzFW9I1rcPGr803gYA6kCV6vEQZWst0nvhg=s88-c-k-c0x00ffffff-no-rj-mo",
    }
    
  ];

  const [linkEl, setlinkEl] = React.useState(null);
  const open5 = Boolean(linkEl);
  const handleClick = (event) => {
    setlinkEl(event.currentTarget);
  };
  const handlePlanClose5 = () => {
    setlinkEl(null);
  };

  const StyledMenu = styled((props : MenuProps) => (
    <Menu
      elevation={0}
      linkOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const [marketStatusInfo, setmarketStatusInfo] = useState("");
  const handleMarketingDataEdit = () => {
    const updatedData = prompt("Please Enter New Category");
    if (updatedData !== null) {
      setmarketStatusInfo(updatedData);
    }
    // handlePlanClose5()
  };

  return (
    <>
      <Box style={{ width: "80%", margin: "auto" }}>
        <Typography
          clas="topText"
          style={{
            fontSize: "16px",
            // color: "grey",
            textAlign:"left",
            fontSyle: "italic",
            marginTop: "100px",

            // lineHeight: "19.12px",
          }}
        >
          SOP
        </Typography>
        <Box style={{ display: "flex" }}>
          <Typography
            style={{
              fontSize: "32px",
              width: "300px",
              left: "120px",
              top: "144px",
              borderRadis: "",
              textAlign:"left",
              fontWeight:"bold"
            }}
            className="actionText"
          >
            Actions Plans
          </Typography>
          <Box
            style={{
              textAlign: "right",
              width: "800px",
              justifyContent: "space-around",
            }}
          >

          
            {/* First Modal */}
            <Button onClick={handlePlanOpen} variant="outlined">
              <GroupRoundedIcon /> Manage Access
            </Button>{" "}
            <Modal
              open={open}
              onClose={handlePlanClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">SOP Access</h2>
                <p
                  id="parent-modal-description"
                  style={{
                    fontFamily: "Manrope",
                    color: "#2563EB",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700",
                  }}
                >
                  Sales
                </p>
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={teamMates}
                  disableCloseOnSelect
                  onChange={(event, newValue: "") => {
                    setSalesDataModal(newValue);
                  }}
                  getOptionLabel={(option) => option.name}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      <Avatar alt="Remy Sharp" src={option.img} />
                      {option.name}
                    </li>
                  )}
                  style={{}}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="TeamMates"
                      placeholder="Select Members"
                    />
                  )}
                />
                <p
                  id="parent-modal-description"
                  style={{
                    fontFamily: "Manrope",
                    color: "#2563EB",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700",
                  }}
                >
                  Marketing
                </p>
                <Autocomplete
                  onChange={(event, newValue: "") => {
                    setMarketingDataModal(newValue);
                  }}
                  multiple
                  id="checkboxes-tags-demo"
                  options={teamMates}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.name}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      <Avatar alt="Remy Sharp" src={option.img} />
                      {option.name}
                    </li>
                  )}
                  style={{}}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="TeamMates"
                      placeholder="Select Members"
                    />
                  )}
                />
                <p
                  id="parent-modal-description"
                  style={{
                    fontFamily: "Manrope",
                    color: "#2563EB",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700",
                  }}
                >
                  Design
                </p>
                <Autocomplete
                  onChange={(event, newValue: "") => {
                    setDesignDataModal(newValue);
                  }}
                  style={{ border: "3px solid teal" }}
                  multiple
                  id="checkboxes-tags-demo"
                  options={teamMates}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.name}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      <Avatar alt="Remy Sharp" src={option.img} />
                      {option.name}
                    </li>
                  )}
                  style={{}}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="TeamMates"
                      placeholder="Select Members"
                    />
                  )}
                />{" "}
                <br />
                <Button onClick={() => handlePlanClose()} color="error">
                  Cancel
                </Button>{" "}
                <Button
                  onClick={() => {
                    alert("You Have Succesfully Added Peoples");
                    handlePlanClose();
                  }}
                  variant="contained"
                  disableElevation
                >
                  Update
                </Button>
              </Box>
            </Modal>
            {/* Second Modal For Adding New Plans */}
            <Button onClick={handlePlanOpen1} variant="contained">
              <AddBoxRoundedIcon variant="contained" /> New Plan
            </Button>
            <Modal
              open={open1}
              onClose={handlePlanClose1}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">Plan Name</h2>
                <p id="parent-modal-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  auctor. Sit amet, consectetur adipiscing consectetur
                  adipiscing elit.
                </p>
                <TextField
                  onChange={(e) => setPlanName(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name "
                  name="Name"
                  autoComplete="Name"
                  autoFocus
                  placeholder="Name Your Plan"
                />
                <br />
                <br />
                <select
                  onChange={(e) => setCategoryHandler(e.target.value)}
                  style={{
                    border: "1px solid #e6f1f9",
                    width: "60%",
                    height: "45px",
                    fontStyle: "normal",
                    fontSize: "18px",
                  }}
                >
                  <option value="">Department</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Design">Design</option>
                  <option value="Sales">Sales</option>
                </select>
                <br />
                <br />
                <Button onClick={() => handlePlanClose1()} color="error">
                  Cancel
                </Button>{" "}
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => handleModalSecond()}
                >
                  Create
                </Button>
              </Box>
            </Modal>
          </Box>
        </Box>
      </Box>
     

      <Box className="dropDiv">
        <Box class="dropdown" style={{border:"1px solid blue",backgroundColor:"lightblue",width:"88%"}}>
          <Typography variant="h5" >{marketStatusInfo ? marketStatusInfo : "Marketing"}</Typography>

          <Box class="dropdown-content">
            {marketingData.length > 0 && marketingData.map((el) => <p>{el}</p>)}
            {marketingDataModal.length > 0 &&
              marketingDataModal.map((el) => <p>{el.name}</p>)}
          </Box>
          {/* ------------------------------ */}

          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open5 ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open5 ? "true" : undefined}
              variant=""
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <MoreVertIcon/>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              linkEl={linkEl}
              open={open5}
              onClose={handlePlanClose5}
            >
              <MenuItem disableRipple>
                <p onClick={() => alert("Workign")}>Edit</p>Edit
              </MenuItem>
              <MenuItem onClick={handlePlanClose5} disableRipple>
                Manage Access
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem
                onClick={handlePlanClose5}
                disableRipple
                style={{ color: "red" }}
              >
                Delete
              </MenuItem>
            </StyledMenu>
          </div>
          {/* ------------------------- */}
        </Box>
        <br />

        <Box class="dropdown" style={{border:"1px solid blue",backgroundColor:"lightblue",width:"88%"}}>
          <Typography variant="h5" >Design</Typography>

          <Box class="dropdown-content">
            {designData.length > 0 && designData.map((el) => <p>{el}</p>)}
            {designDataModa.length > 0 &&
              designDataModa.map((el) => <p>{el.name}</p>)}
          </Box>
          {/* --------------- */}

          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open5 ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open5 ? "true" : undefined}
              variant=""
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              
              <MoreVertIcon/>

            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              linkEl={linkEl}
              open={open5}
              onClose={handlePlanClose5}
            >
              <MenuItem onClick={handlePlanClose5} disableRipple>
                Edit
              </MenuItem>
              <MenuItem onClick={handlePlanClose5} disableRipple>
                Manage Access
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem
                onClick={handlePlanClose5}
                disableRipple
                style={{ color: "red" }}
              >
                Delete
              </MenuItem>
            </StyledMenu>
          </div>
          {/* ------------------- */}
        </Box>
        <br />

        <Box class="dropdown" style={{border:"1px solid blue",backgroundColor:"lightblue",width:"88%"}}>
          <Typography variant="h5" >Sales</Typography>

          <Box class="dropdown-content">
            {salesData.length > 0 && salesData.map((el) => <p>{el}</p>)}
            {salesDataModal.length > 0 &&
              salesDataModal.map((el) => <p>{el.name}</p>)}
          </Box>

          {/* ------------------- */}

          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open5 ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open5 ? "true" : undefined}
              variant=""
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <MoreVertIcon/>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              linkEl={linkEl}
              open={open5}
              onClose={handlePlanClose5}
            >
              <MenuItem onClick={handlePlanClose5} disableRipple>
                Edit
              </MenuItem>
              <MenuItem onClick={handlePlanClose5} disableRipple>
                Manage Access
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem
                onClick={() => handlePlanClose5}
                disableRipple
                style={{ color: "red" }}
              >
                Delete
              </MenuItem>
            </StyledMenu>
          </div>
          {/* -------------------- */}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
