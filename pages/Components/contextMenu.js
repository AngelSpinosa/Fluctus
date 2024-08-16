import styles from '/styles/ContextMenu.module.css';

export default function ContextMenu({ x, y, song, closeMenu }) {
  return (
    <div
      className={styles.contextMenu}
      style={{ top: y, left: x }}
      onClick={closeMenu}
    >
      <ul>
        <li>Añadir a una playlist</li>
        <li>Editar info. de la canción</li>
        <li>Ir al álbum</li>
        <li>Eliminar</li>
      </ul>
    </div>
  );
}
