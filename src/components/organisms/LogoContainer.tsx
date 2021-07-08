import React from "react";

import { Box, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    logoContainer: {
      paddingTop: "80px",
    },
  })
);

interface LogoContainerProps {
  className?: string;
  path: string;
  alt: string;
  width?: number;
  height?: number;
  children: React.ReactNode;
}

const LogoContainer: React.FC<LogoContainerProps> = ({
  className,
  path,
  alt,
  width,
  // eslint-disable-next-line
  height,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <div className={className || ""}>
        <Box textAlign="center">
          <img src={path} alt={alt} width={width || ""} height={height || ""} />
        </Box>
        {children}
      </div>
    </div>
  );
};

export default LogoContainer;
