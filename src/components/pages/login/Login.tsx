import React, { useContext, useEffect } from "react";

import { Field, Form, Formik } from "formik";
// Material UIのために、formikのFormコンポーネントに渡す必要がある。 @material_ui/core にも同名のものがあり注意
import { TextField } from "formik-material-ui";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  Typography,
  InputAdornment,
  LinearProgress
} from "@material-ui/core";
// eslint-disable-next-line
import * as H from "history";
import { AuthContext } from "components/utils/Auth";
import auth from "components/utils/firebase";

import FormTemplate, { useStyles } from "components/molecules/FormTemplate";
import PasswordShowIconToggle from "components/molecules/PasswordShowIconToggle";

// フロント側バリデーション
const AuthSchema = Yup.object().shape({
  userID: Yup.string().required("ユーザーIDを入力してください"),
  password: Yup.string().required("パスワードを入力してください"),
});

interface State {
  amount: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

interface LoginProps {
  history: H.History;
}

const Login: React.FC<LoginProps> = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();

  const [values, setValues] = React.useState<State>({
    amount: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  // eslint-disable-next-line
  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    currentUser && history.push("/");
    document.title = "ログイン | Chart App";
  }, [currentUser, history]);

  return (
    <>
      <FormTemplate title="ログイン">
        <Formik
          // フォームの初期値
          initialValues={{ userID: "", password: "" }}
          // バリデーション
          validationSchema={AuthSchema}
          // 送信後の処理
          onSubmit={async value => {

            try {
              await auth.signInWithEmailAndPassword(value.userID, value.password);
              history.push("/login");
            } catch (error) {
              alert(error.message);
            }
          }}
          // フォームの描画を定義。今回はFormikで持つオブジェクトを3つ渡してフォーム内で利用している
          // submitForm：上記で定義したフォームSubmit時のイベント
          // isSubmitting：Submit中かどうかの状態判定
          // isValid：フォームがValidでSubmit可能化の状態判定
          render={({ submitForm, isSubmitting, isValid }) => (
            <Form>
              {isSubmitting && <LinearProgress />}
              <FormControl fullWidth>
                <Field
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="userID"
                  label="ユーザーID"
                  name="userID"
                  autoFocus
                  component={TextField}
                  autoComplete="off"
                />
              </FormControl>
              <FormControl fullWidth>
                <Field
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="パスワード"
                  id="password"
                  component={TextField}
                  type={values.showPassword ? "text" : "password"}
                  autoComplete="off"
                />
                <InputAdornment position="end">
                  <PasswordShowIconToggle
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    showPassword={values.showPassword}
                  />
                </InputAdornment>
              </FormControl>
              <FormControl fullWidth>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  // Submit時のイベントを紐付け
                  onClick={submitForm}
                  // フォームがValidでない or Submit中の場合、SubmitボタンをDisabledにする
                  // disabled={!isValid || isSubmitting}
                  disabled={!isValid || isSubmitting}
                >
                  ログイン
                </Button>
                <Typography align="center">
                  <Link to="/signup" className={classes.linkText}>新しくアカウントを作成</Link>
                </Typography>
              </FormControl>
            </Form>
          )}
        />
      </FormTemplate>
    </>
  );
};

export default Login;
