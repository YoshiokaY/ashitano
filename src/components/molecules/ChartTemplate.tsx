import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Paper, Box } from "@material-ui/core";
import { Chart } from "react-google-charts";
import CircularProgress from "@material-ui/core/CircularProgress";

export const useStyles = makeStyles(theme =>
  createStyles({
    main: {
      paddingBottom: "64px",
      position: "relative"
    },
    loader: {
      margin: "auto",
      position: "absolute",
      zIndex: 99,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%"
    }
  })
);

interface ChartTemplateProps {
  children?: React.ReactNode;
  type: any;
  height?: number;
  width?: number | string;
  data?: number[];
  sheetUrl?: string;
  sheetQuery?: any;
  options?: any;
}

const ChartTemplate: React.FC<ChartTemplateProps> = ({
  children,
  type,
  height,
  width,
  data,
  sheetUrl,
  sheetQuery,
  options,
}) => {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.main}>
      <Chart
        loader={<Box className={classes.loader}>
          <CircularProgress />
        </Box>}
        chartType={type}
        height={height}
        width={width}
        spreadSheetUrl={sheetUrl}
        spreadSheetQueryParameters={sheetQuery}
        data={data}
        options={options}
        chartEvents={[
          {
            eventName: 'animationfinish',
            callback: () => {
              console.log('Animation Finished')
            },
          },
        ]}
        rootProps={{ 'data-testid': '3' }}
      />
      {children}
    </Container>
  );
};

export default ChartTemplate;
