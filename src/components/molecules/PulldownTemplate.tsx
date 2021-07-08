import React from "react";

import {
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
    selectEmpty: {
      marginTop: "5px!important",
      backgroundColor: theme.palette.primary.light,
      width: 104,
      height: 40,
      borderRadius: 4,
    },
    selectItem: {},
    disable: {
      opacity: ".4",
      pointerEvents: "none",
    },
    selectLabel: {
      position: "relative",
      transform: "none",
    },
    selectLabelText: {
      margin: "0",
      color: "#282828",
    },
    dropdownStyle: {
      overflowY: "auto",
      maxHeight: 288,
    },
    open: {
      backgroundColor: "#C8C8C8",
    },
  })
);

interface ChartPulldownProps {
  label?: string;
  setTarget?: any;
  setTargetData?: any;
  disable?: boolean;
  selections: any;
}

const ChartPulldown: React.FC<ChartPulldownProps> = ({
  label,
  setTarget,
  setTargetData,
  disable,
  selections,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleChange = (event: any) => {
    if (setTarget) setTarget(event.target.value);
    if (setTargetData) setTargetData(event.target.value);
  };

  return (
    <FormControl
      className={`${classes.formControl} ${disable ? classes.disable : ""}`}
    >
      {label && (
        <InputLabel
          id="demo-simple-select-placeholder-label-label"
          className={classes.selectLabel}
        >
          <Typography variant="body2" className={classes.selectLabelText}>
            {label}
          </Typography>
        </InputLabel>
      )}
      <Select
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
        onChange={handleChange}
        defaultValue={selections[0]}
        className={`${classes.selectEmpty} ${open && classes.open}`}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
          classes: {
            paper: classes.dropdownStyle,
          },
        }}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        {selections.map((selection: any) => {
          return (
            <MenuItem
              key={selection}
              value={selection}
              className={classes.selectItem}
              dense
            >
              <Typography variant="body2">
                {selection}
              </Typography>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ChartPulldown;
