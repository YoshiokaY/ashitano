import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Paper } from "@material-ui/core";

import LogoContainer from "components/organisms/LogoContainer";
import NewLineToBreak from "components/atoms/NewLineToBreak";

export const useStyles = makeStyles(theme =>
  createStyles({
    main: {
      paddingBottom: "64px",
      marginTop: "5%"
    },
    title: {
      fontSize: 24,
      marginBottom: "1em",
      fontWeight: "bold"
    },
    formBox: {
      width: "100%",
    },
    formBoxHaveCaution: {
      marginTop: "0",
    },
    paper: {
      maxWidth: 400,
      width: "100%",
      padding: "5% 2.5em",
      margin: "2em auto",
      borderRadius: "12px",
    },
    formText: {
      marginTop: "14px",
    },
    submit: {
      margin: "1em auto",
      padding: "1em"
    },
    linkText: {
      color: theme.palette.primary.main,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underLine",
      },
    },
    button: {
      marginTop: "24px",
    },
    caution: {
      color: theme.palette.error.main,
      paddingTop: "16px",
      paddingBottom: "2px",
    },
    textField: {
      margin: "24px auto 0",
    },
  })
);

interface FormTemplateProps {
  children: React.ReactNode;
  title: string;
  formText?: string;
  caution?: string;
}

const FormTemplate: React.FC<FormTemplateProps> = ({
  children,
  title,
  formText,
  caution,
}) => {
  const classes = useStyles();
  return (
    <Container component="main">
      <LogoContainer
        path="/_assets/img/logo.svg"
        width={200}
        alt="nadia"
        className={classes.main}
      >
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h1" align="center" className={classes.title}>
            <NewLineToBreak text={title} />
          </Typography>
          {formText && (
            <Typography
              component="p"
              variant="body2"
              align="center"
              className={classes.formText}
            >
              <NewLineToBreak text={formText} />
            </Typography>
          )}
          <div
            className={
              caution
                ? `${classes.formBox} ${classes.formBoxHaveCaution}`
                : classes.formBox
            }
          >
            {caution && (
              <Typography
                variant="body2"
                align="center"
                className={classes.caution}
              >
                {caution}
              </Typography>
            )}
            {children}
          </div>
        </Paper>
      </LogoContainer>
    </Container>
  );
};

export default FormTemplate;
