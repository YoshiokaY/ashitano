import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    main: {
      minHeight: "600px",
      position: "relative",
    },
    heading: {
      padding: "20px",
    },
    pulldown: {
      width: 200,
    },
    chartContainer: {
      padding: "3%",
    },
  })
);
