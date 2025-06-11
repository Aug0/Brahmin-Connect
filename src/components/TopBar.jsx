import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Divider,
  IconButton,
  Badge,
  Typography,
  Box,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { FaBars } from "react-icons/fa";

const Topbar = ({ onMenuClick }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white h-16 px-4 md:px-6 flex justify-between items-center border-b border-gray-200 sticky top-0 z-30">
      {/* Left: Menu toggle for mobile */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-black"
          onClick={onMenuClick}
        >
          <FaBars size={20} />
        </button>
        <div>
          <Typography variant="subtitle1" className="!text-black font-semibold">
            Hello, Kusha
          </Typography>
          <Typography variant="body2" className="!text-gray-400 text-sm">
            Have a nice day
          </Typography>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-4 sm:gap-6">
        <IconButton>
          <Badge
            color="warning"
            variant="dot"
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <NotificationsIcon className="text-black" />
          </Badge>
        </IconButton>

        <Divider orientation="vertical" flexItem className="!border-gray-300 h-6 hidden sm:block" />

        <Box className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/profile")}>
          <Avatar src="src/assets/Image.png" alt="User" sx={{ width: 32, height: 32 }} />
          <Box className="hidden sm:block">
            <Typography variant="body2" className="!text-black font-medium leading-tight">
              Kusha Reddy
            </Typography>
            <Typography variant="caption" className="!text-gray-500">
              Agent
            </Typography>
          </Box>
          <ExpandMoreIcon className="text-black text-sm" />
        </Box>
      </div>
    </div>
  );
};

export default Topbar;