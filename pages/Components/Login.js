import { FaCircleUser } from "react-icons/fa6";
import styles from '/styles/Login.module.css';

export default function CrearPerfil() {
    return(
        <div className={styles.container}>
            <header>
                <img src="/public/LogoLetras.png" alt="Logo"/>
            </header>
            <h1 className={styles.Title}>Iniciar sesión</h1>
            <form className={styles.Form} method="POST">

                <label className={styles.label}>Nombre de usuario</label>
                <input className={styles.input} type="text" placeholder="Introduce tu username"/>

                <label className={styles.label}>Contraseña</label>
                <input className={styles.input} type="password" placeholder="Introduce tu contraseña"/>
                 
                <button className={styles.button} type="submit">CREAR</button>
            </form>
        </div>
    );
}