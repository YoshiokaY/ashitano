import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    main: {
      minHeight: "600px",
    },
    heading: {
      padding: "20px",
    },
    box: {
      width: "100%",
      maxWidth: 1000,
      margin: "auto",
    },
  })
);
