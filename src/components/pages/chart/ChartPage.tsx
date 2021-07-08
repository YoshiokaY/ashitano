import React, { useRef, useState, useEffect } from "react";
import PageTemplate from "components/templates/PageTemplate";
import { List, ListItem, Box, Paper, Typography } from "@material-ui/core";
import ChartTemplate from "components/molecules/ChartTemplate";
import Pulldown from "components/molecules/PulldownTemplate";
import { useStyles } from "./Chart.style";

const ProductPage: React.FC = () => {
  const classes = useStyles();
  const inputEl: any = useRef(null);
  const height = 700;
  const type = "ComboChart"

  const sheetUrl = "https://docs.google.com/spreadsheets/d/1_JTHf-FUz6Bs0S5oK5iSYAezuI5Kckm-6xXn5MTiWcc";

  const sheetQuery = {
    headers: 1,
    sheet: "シート1",
    query: 'SELECT A, B, C, D LIMIT 12',
  }

  const sheetQuery2 = {
    headers: 1,
    sheet: "シート2",
    query: 'SELECT A, B, C, D LIMIT 12',
  }

  const options = {
    title: '',
    hAxis: { title: '', minValue: 0, maxValue: 15 },//横軸
    vAxis: { title: '', minValue: 0, maxValue: 15, format: '### 時間' },//縦軸
    legend: { position: "bottom" },//凡例
    seriesType: 'bars',//複合グラフの基本タイプ
    series: { 2: { type: 'line' } },//複合グラフの例外データとタイプ
    enableInteractivity: true,//マウスオーバー
    focusTarget: 'category',//マウスオーバー時の表示範囲
    chartArea: { 'width': '80%', 'height': '70%' },
    animation: {
      startup: true,
      easing: 'linear',
      duration: 400,
    }
  }

  const [TargetData, setTargetData] = useState("2021");

  useEffect(() => {
    setTargetData(TargetData);
  }, [TargetData, setTargetData]);

  const targetLabel = "年度変更";
  const targets = ["2021", "2020"];

  return (
    <PageTemplate title="グラフページ">
      <Box my={8}>
        <Paper elevation={2} className={classes.chartContainer}>
          <List>
            <ListItem>
              <Box className={classes.pulldown}>
                <Pulldown
                  setTargetData={setTargetData}
                  selections={targets}
                  label={targetLabel}
                  disable={TargetData === "実績"}
                />
              </Box>
            </ListItem>
          </List>
          <Typography variant="h3" align="center">{TargetData}年度工数実績</Typography>
          <ChartTemplate
            type={type}
            height={height}
            sheetUrl={sheetUrl}
            sheetQuery={TargetData === "2020" ? sheetQuery2 : sheetQuery}
            options={options}
          />
        </Paper>
      </Box>
    </PageTemplate>
  );
};

export default ProductPage;
