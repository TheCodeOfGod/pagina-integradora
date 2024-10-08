import styles from "./styles/tarjetas-lugares.module.css";

function TarjetasResultados() {
  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        Enlistados por <span className={styles.textBold}>Relevancia</span>
      </div>
      <div className={styles.containerLugares}>
        <div className={styles.filasLugares}>
          <div
            className={styles.lugaresCard}
            style={{
              "--bg-url": `url("https://github.com/anxoxurado/Alpha-ADVCUU/blob/main/lugares/imagenes_lugares/mozao-cafe.jpg?raw=true")`,
            }}
          >
            <div className={styles.lugarNombre}>Mozao Café</div>
          </div>
          <div
            className={styles.lugaresCard}
            style={{
              "--bg-url": `url("https://github.com/anxoxurado/Alpha-ADVCUU/blob/main/lugares/imagenes_lugares/cafedelalma-centro.jpg?raw=true")`,
            }}
          >
            {" "}
            <div className={styles.lugarNombre}>Café del Alma Centro</div>
          </div>
          <div
            className={styles.lugaresCard}
            style={{
              "--bg-url": `url("https://github.com/anxoxurado/Alpha-ADVCUU/blob/main/lugares/imagenes_lugares/fresh-coffee-cakes.jpg?raw=true")`,
            }}
          >
            <div className={styles.lugarNombre}>Fresh, coffee & cakes</div>
          </div>
        </div>

        <div className={styles.filasLugares}>
          <div
            className={styles.lugaresCard}
            style={{
              "--bg-url": `url("https://github.com/anxoxurado/Alpha-ADVCUU/blob/main/lugares/imagenes_lugares/kaldi-Cafe.jpg?raw=true")`,
            }}
          >
            <div className={styles.lugarNombre}>Kaldi Café</div>
          </div>
          <div
            className={styles.lugaresCard}
            style={{
              "--bg-url": `url("https://github.com/anxoxurado/Alpha-ADVCUU/blob/main/lugares/imagenes_lugares/sec%C3%96njom.jpg?raw=true")`,
            }}
          >
            <div className={styles.lugarNombre}>SecÖnjom</div>
          </div>
          <div
            className={styles.lugaresCard}
            style={{
              "--bg-url": `url("https://github.com/anxoxurado/Alpha-ADVCUU/blob/main/lugares/imagenes_lugares/mandala-cafe.jpg?raw=true")`,
            }}
          >
            <div className={styles.lugarNombre}>Mándala Café</div>
          </div>
        </div>
        <div className={styles.filasLugares}>
          <div
            className={styles.lugaresCard}
            style={{
              "--bg-url": `url("https://github.com/anxoxurado/Alpha-ADVCUU/blob/main/lugares/imagenes_lugares/cafe-cortez.jpg?raw=true")`,
            }}
          >
            <div className={styles.lugarNombre}>Café Cortez</div>
          </div>
          <div
            className={styles.lugaresCard}
            style={{
              "--bg-url": `url("https://github.com/anxoxurado/Alpha-ADVCUU/blob/main/lugares/imagenes_lugares/rosetta-coffee.jpg?raw=true")`,
            }}
          >
            <div className={styles.lugarNombre}>Rosetta Coffee</div>
          </div>
          <div
            className={styles.lugaresCard}
            style={{
              "--bg-url": `url("https://github.com/anxoxurado/Alpha-ADVCUU/blob/main/lugares/imagenes_lugares/corinto.jpg?raw=true")`,
            }}
          >
            <div className={styles.lugarNombre}>Corinto</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarjetasResultados;
