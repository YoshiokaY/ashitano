import React, { useContext, useEffect } from "react";
import { Divider, Box, Container, Typography, Paper, Button, Grid } from "@material-ui/core";
import PageTemplate from "../../templates/PageTemplate";
import ViewsList from "components/molecules/ViewList";

import { AuthContext } from "components/utils/Auth";
import auth from "components/utils/firebase";
import * as H from "history";

import { useStyles } from "./Home.style";

const items = [
  {
    id: 1,
    to: "/",
    name: "ホーム画面",
  },
  {
    id: 2,
    to: "/chart",
    name: "グラフ画面",
  },
];

interface HomePageProps {
  home: any;
}

interface HomePageProps {
  history: H.History;
}

const HomePage: React.FC<HomePageProps> = ({ history }) => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    // currentUserが明示的にnullの場合はログイン画面へリダイレクト
    currentUser === null && history.push("/login");
    document.title = "ホーム | Chart App";
  }, [currentUser]);

  return (
    <PageTemplate title="ホーム画面">
      <Box my={8}>
        <Paper elevation={3} className={classes.box}>
          <Typography component="h1" variant="h5" className={classes.heading}>
            画面一覧
          </Typography>
          <Divider />
          <ViewsList items={items} />
        </Paper>
      </Box>
    </PageTemplate>
  );
};

export default HomePage;
