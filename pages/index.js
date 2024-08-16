import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { FiPlay, FiPlus, FiSearch, FiSettings, FiSkipBack, FiSkipForward, FiRepeat, FiShuffle } from 'react-icons/fi';
import { MdAddCircle } from "react-icons/md";
import Modal from './Components/Modal';
import ContextMenu from './Components/contextMenu';


export default function Home() {
  const[menuVisible, setMenuVisible]=useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setMenuVisible(false); // Cerrar el menú cuando se abre el modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Fluctus</h1>
        <div className={styles.icons}>
          <div className={styles.iconWrapper}>
            <FiPlus className={styles.addIcon} onClick={toggleMenu} />
            {menuVisible && (
              <div className={styles.dropdownMenu}>
                <button className={styles.dropdownItem} onClick={openModal}>Añadir canción</button>
                <button className={styles.dropdownItem}>Crear playlist</button>
              </div>
            )}
          </div>
          <FiSearch className={styles.icon} />
          <FiSettings className={styles.icon} />
        </div>
      </header>
      
      <main className={styles.main}>
        <h2 className={styles.welcome}>Bienvenido, (Nombre).</h2>
        
        <section>
          <h3 className={styles.sectionTitle}>Continua reproduciendo</h3>
          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className={styles.card}>
                <FiPlay className={styles.playIcon} />
                <p>Canción {index + 1}</p>
                <span>Artista {index + 1}</span>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h3 className={styles.sectionTitle}>Playlists</h3>
          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className={styles.card}>
                <FiPlay className={styles.playIcon} />
                <p>Canción {index + 1}</p>
                <span>Artista {index + 1}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.playerControls}>
          <FiShuffle className={styles.icon} />
          <FiSkipBack className={styles.icon} />
          <FiPlay className={styles.playButton} />
          <FiSkipForward className={styles.icon} />
          <FiRepeat className={styles.icon} />
        </div>
        <div className={styles.progressBar}></div>
      </footer>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}
