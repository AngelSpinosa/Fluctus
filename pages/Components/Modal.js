import { useState } from 'react';
import styles from '/styles/modal.module.css';

export default function Modal({ closeModal }) {
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');

  const suggestions = {
    names: ['Canción 1', 'Canción 2', 'Canción 3'], // Simulación de sugerencias
    artists: ['Artista 1', 'Artista 2', 'Artista 3'],
    albums: ['Álbum 1', 'Álbum 2', 'Álbum 3']
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Añadir canción</h2>
        <form>
          <div className={styles.inputGroup}>
            <label>Seleccionar archivo</label>
            <input type="file" accept="audio/*" />
          </div>
          <div className={styles.inputGroup}>
            <label>Seleccionar portada</label>
            <input type="file" accept="image/*" />
          </div>
          <div className={styles.inputGroup}>
            <label>Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              list="name-suggestions"
            />
            <datalist id="name-suggestions">
              {suggestions.names.map((suggestion, index) => (
                <option key={index} value={suggestion} />
              ))}
            </datalist>
          </div>
          <div className={styles.inputGroup}>
            <label>Artista</label>
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              list="artist-suggestions"
            />
            <datalist id="artist-suggestions">
              {suggestions.artists.map((suggestion, index) => (
                <option key={index} value={suggestion} />
              ))}
            </datalist>
          </div>
          <div className={styles.inputGroup}>
            <label>Álbum</label>
            <input
              type="text"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              list="album-suggestions"
            />
            <datalist id="album-suggestions">
              {suggestions.albums.map((suggestion, index) => (
                <option key={index} value={suggestion} />
              ))}
            </datalist>
          </div>
          <button type="submit" className={styles.submitButton}>SUBIR</button>
        </form>
        <button onClick={closeModal} className={styles.closeButton}>Cerrar</button>
      </div>
    </div>
  );
}
