import React from "react";

import { IconButton } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(() =>
  createStyles({
    toggleIcon: {
      position: "absolute",
      right: 14,
      top: 30,
      width: 30,
      height: 30,
      borderRadius: 4,
      "&:hover": {
        backgroundColor: "#E8F3F8",
      },
      "&.showActive": {
        backgroundColor: "#BBE5F1",
      },
    },
  })
);

interface PasswordShowIconToggleProps {
  onClick: () => void;
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showPassword: boolean;
}

const PasswordShowIconToggle: React.FC<PasswordShowIconToggleProps> = ({
  onClick,
  onMouseDown,
  showPassword,
}) => {
  const classes = useStyles();

  return (
    <IconButton
      aria-label="toggle password visibility"
      onClick={onClick}
      onMouseDown={onMouseDown}
      className={`${classes.toggleIcon}${showPassword ? " showActive" : ""}`}
    >
      {showPassword ? (

        <Visibility />
      ) : (
        <VisibilityOff />
      )}
    </IconButton>
  );
};

export default PasswordShowIconToggle;
