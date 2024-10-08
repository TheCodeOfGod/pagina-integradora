import BotonCategoria from "./botones-categorias";
import imagenCafe from "./imagenes/ComponentCafe.svg";
import imagenBar from "./imagenes/ComponentBar.svg";
import imagenRestaurante from "./imagenes/ComponentRestaurantes.svg";
import imagenCultural from "./imagenes/ComponentCulturales.svg";
import styles from "./styles/nav-bar-vertical.module.css";
import TarjetasResultados from "./tarjetas-lugares";

function NavBarVertical() {
  return (
    <div className={styles.containerAll}>
      <div className={styles.contenedorNav}>
        <h1 className={styles.titulo}>
          Resultados <span className={styles.textOrange}>de los</span> filtros{" "}
          <span className={styles.textOrange}>seleccionados</span>
        </h1>

        <BotonCategoria
          nombreCategoria="Café"
          imagenSrc={imagenCafe}
        ></BotonCategoria>
        <BotonCategoria
          nombreCategoria="Bares"
          imagenSrc={imagenBar}
        ></BotonCategoria>
        <BotonCategoria
          nombreCategoria="Restaurantes"
          imagenSrc={imagenRestaurante}
        ></BotonCategoria>
        <BotonCategoria
          nombreCategoria="Culturales"
          imagenSrc={imagenCultural}
        ></BotonCategoria>
      </div>
      <TarjetasResultados></TarjetasResultados>
    </div>
  );
}

export default NavBarVertical;
