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
export const AuthSchema = Yup.object().shape({
  email: Yup.string()
    .email("正しいメールアドレスを入力してください")
    .required("メールアドレスを入力してください"),
  password: Yup.string()
    .required("パスワードを入力してください")
    .min(8, "8文字以上を入れてください")
    .max(99, "99文字以下を入れてください")
    .matches(
      /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
      "半角英数字・記号を1回以上使用してください"
    ),
});

interface State {
  amount: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

interface SigninProps {
  history: H.History;
}

const Signin: React.FC<SigninProps> = ({ history }) => {
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
    // 前回はここでauth.onAuthStateChanged()を呼んでいたがその必要がない
    currentUser && history.push("/");
    document.title = "アカウント作成 | Chart App";
    // [currentUser]により、currentUserが変化した際にuseEffect内を発動できる
    // undefined → APIコール結果を受取る → User or null になる → useEffect内発動 という流れ
  }, [currentUser, history]);

  return (
    <>
      <FormTemplate title="アカウント作成">
        <Formik
          // フォームの初期値を定義
          initialValues={{ email: "", password: "" }}
          // Yupで定義したスキーマを利用
          validationSchema={AuthSchema}
          // フォームSubmit時のイベントを定義。Firebase APIを呼んでいる
          onSubmit={async value => {
            try {
              await auth.createUserWithEmailAndPassword(
                value.email,
                value.password
              );
              history.push("/signin");
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
              <FormControl margin="normal" fullWidth>
                <Field
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="メールアドレス"
                  name="email"
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
                  // フォームがValidでない or Submit中の場合、SubmitボタンをDisabledにする
                  disabled={!isValid || isSubmitting}
                >
                  アカウント作成
                </Button>
                <Typography align="center">
                  <Link to="/login" className={classes.linkText}>既にアカウントがある場合</Link>
                </Typography>
              </FormControl>
            </Form>
          )}
        />
      </FormTemplate>
    </>
  );
};

export default Signin;
