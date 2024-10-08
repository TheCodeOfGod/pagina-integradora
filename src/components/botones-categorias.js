import styles from "./styles/boton-categorias.module.css";

function BotonCategoria({ nombreCategoria, imagenSrc }) {
  return (
    <div className={styles.botonContainer}>
      <button className={styles.boton}>
        <img src={imagenSrc} alt={nombreCategoria} className={styles.imagen} />
        <p className={styles.texto}>{nombreCategoria}</p>
      </button>
    </div>
  );
}

export default BotonCategoria;
