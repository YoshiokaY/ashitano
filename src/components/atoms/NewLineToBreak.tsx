import React from "react";

interface NewLineToBreakProps {
  text?: string;
}

// 改行コード含んだpropsを<br>に変換するコンポーネント
const NewLineToBreak: React.FC<NewLineToBreakProps> = ({ text }) => {
  return (
    <>
      {text &&
        text.split("\\n").map(string => {
          return (
            <React.Fragment key={string}>
              {string}
              <br />
            </React.Fragment>
          );
        })}
    </>
  );
};

export default NewLineToBreak;
