import { FaCircleUser } from "react-icons/fa6";
import styles from '../../styles/Components/crearPerfil.module.css';

export default function CrearPerfil() {
    return(
        <div className={styles.container}>
            <header>
                <img src="./public/LogoLetras.svg" alt="Logo"/>
            </header>
            <h1 className={styles.Title}>Crea tu perfil</h1>
            <form className={styles.Form}>
                <label className={styles.label}>Nombre</label>
                <input className={styles.input} type="text" placeholder="Introduce tu nombre"/>

                <label className={styles.label}>Apellidos</label>
                <input className={styles.input} type="text" placeholder="Introduce tus apellidos"/>

                <label className={styles.label}>Contraseña</label>
                <input className={styles.input} type="password" placeholder="Introduce tu contraseña"/>

                <div className={styles.seccionFoto}>
                    <FaCircleUser className={styles.iconoFoto}/>
                    <span className={styles.fotoTexto}>Foto de usuario</span>
                </div> 
                <button className={styles.button} type="submit">CREAR</button>
            </form>
        </div>
    );
}