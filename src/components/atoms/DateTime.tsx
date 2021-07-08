import React, { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";

interface DateTimeProps {
  demoLastUpdate?: boolean;
}

const DateTime: React.FC<DateTimeProps> = ({ demoLastUpdate }) => {
  const now = new Date();
  const [date, setDate] = useState(now);
  const [dateDemoLastUpdate, setDateDemoUpdate] = useState(
    new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 1,
      now.getHours(),
      now.getMinutes()
    )
  );

  useEffect(() => {
    const timer = demoLastUpdate
      ? setInterval(
          () =>
            setDateDemoUpdate(
              new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate() - 1,
                now.getHours(),
                now.getMinutes()
              )
            ),
          1000
        )
      : setInterval(() => setDate(now), 1000);
    const cleanup = () => clearInterval(timer);

    return cleanup;
  });

  const language = "ja-JP";
  const dateString = demoLastUpdate
    ? dateDemoLastUpdate.toLocaleDateString(language, {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
      })
    : date.toLocaleDateString(language, {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
      });
  const formatDateString = dateString.replace("(", "（").replace(")", "）");
  const formatTimeString = demoLastUpdate
    ? dateDemoLastUpdate.toLocaleTimeString(language, {
        hour: "2-digit",
        minute: "2-digit",
      })
    : date.toLocaleTimeString(language, {
        hour: "2-digit",
        minute: "2-digit",
      });

  return (
    <Typography variant="body2">
      {formatDateString}
      {formatTimeString}
    </Typography>
  );
};

export default DateTime;
