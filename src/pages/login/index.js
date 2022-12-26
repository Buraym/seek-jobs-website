import { observer } from "mobx-react-lite";

import ImgLogin from "../../assets/img-sec-login.svg";
import IconGoogle from "../../assets/icon-google.svg";

import styles from "../../styles/login.module.css";

const LoginPage = observer(() => {
  function handleSubmit(ev) {
    try {
      ev.preventDefault();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.login_screen}>
      <div className={styles.login_card}>
        <div className={styles.img_section}>
          <div className={styles.brand_text}>
            Seek Jobs, todas as Vagas Tech
          </div>
          <div>
            <img src={ImgLogin} className={styles.brand_img} />
          </div>
        </div>
        <div className={styles.form_section}>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_label}>Acesse sua conta</div>
            <div className={styles.form_google_login_box}>
              <button type="button" className={styles.form_google_login}>
                <div className={styles.form_google_login_label_box}>
                  <img
                    src={IconGoogle}
                    className={styles.form_google_login_label_icon}
                  />
                  Continuar com Google
                </div>
              </button>
            </div>
            <div className={styles.form_or_label}>OU</div>
            <div>
              <input
                className={styles.form_email}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                className={styles.form_password}
                placeholder="Senha"
                type="password"
                required
              />
            </div>
            <div className={styles.form_forgot_box}>
              <a className={styles.form_forgot}>Esqueceu a senha?</a>
            </div>
            <div className={styles.form_submit_box}>
              <button type="submit" className={styles.form_submit}>
                Entrar
              </button>
            </div>
            <div className={styles.form_register_box}>
              Não tem login?
              <a target="_blank" className={styles.form_register_label}>
                Cadastre-se
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default LoginPage;
