import { FaCircleUser } from "react-icons/fa6";
import styles from '/styles/crearPerfil.module.css';

export default function CrearPerfil() {
    return(
        <div className={styles.container}>
            <header>
                <img src="/public/LogoLetras.png" alt="Logo"/>
            </header>
            <h1 className={styles.Title}>Crea tu perfil</h1>
            <form className={styles.Form} method="POST">
                <label className={styles.label}>Nombre</label>
                <input className={styles.input} type="text" placeholder="Introduce tu nombre"/>

                <label className={styles.label}>Nombre de usuario</label>
                <input className={styles.input} name="username" type="text" placeholder="Introduce tu username"/>

                <label className={styles.label}>E-mail</label>
                <input className={styles.input} type="text" placeholder="Introduce tu correo electrónico"/>

                <label className={styles.label}>Contraseña</label>
                <input className={styles.input} name="password" type="password" placeholder="Introduce tu contraseña"/>

                <div className={styles.seccionFoto}>
                    <FaCircleUser className={styles.iconoFoto}/>
                    <span className={styles.fotoTexto}>Foto de usuario</span>
                </div> 
                <button className={styles.button} type="submit">CREAR</button>
            </form>
        </div>
    );
}