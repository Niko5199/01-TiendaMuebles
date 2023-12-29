import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import categoria1 from "../../../assets/images/categoria1.jpg";
import categoria2 from "../../../assets/images/categoria2.jpg";
import categoria3 from "../../../assets/images/categoria3.jpg";
import producto1 from "../../../assets/images/producto1.jpg";
import producto2 from "../../../assets/images/producto2.jpg";
import producto3 from "../../../assets/images/producto3.jpg";
import producto4 from "../../../assets/images/producto4.jpg";
import producto5 from "../../../assets/images/producto5.jpg";
import producto6 from "../../../assets/images/producto6.jpg";

export const Header = () => {
  return (
    <>
      <header>
        <h1 className={styles.nombreSitio}>
          Tienda <span>Muebles</span>
        </h1>
      </header>

      <div className={styles.contenedorNavegacion}>
        <nav className={`${styles.navPrincipal} ${styles.contenedor}`}>
          <Link to={"/"}>Inicio</Link>
          <Link to={"/nosotros"}>Nosotros</Link>
          <Link to={"/tienda"}>Tienda</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/galeria"}>Galeria</Link>
          <Link to={"/contacto"}>Contacto</Link>
        </nav>
      </div>

      <div className={styles.hero}></div>

      <section className={`${styles.contenedor} ${styles.categorias}`}>
        <h2 className={styles.textCenter}>Categorias de Productos</h2>
        <div className={styles.listadoCategorias}>
          <div className={`${styles.categoria}`}>
            <img src={categoria1} alt="Imagen Categoria 1" />
            <Link to={"/oficina"}>Oficina</Link>
          </div>
          <div className={`${styles.categoria}`}>
            <img src={categoria2} alt="Imagen Categoria 2" />
            <Link to={"/hogar"}>Hogar</Link>
          </div>
          <div className={`${styles.categoria}`}>
            <img src={categoria3} alt="Imagen Categoria 3" />
            <Link to={"/cocina"}>Cocina</Link>
          </div>
        </div>
      </section>

      <section className={styles.sobreNosotros}>
        <div className={`${styles.contenedor} ${styles.sobreNosotrosGrid}`}>
          <div className={styles.textoNosotros}>
            <h2>Sobre Nosotros</h2>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen.{" "}
            </p>
          </div>
        </div>
      </section>

      <main className={`${styles.contenidoPrincipal} ${styles.contenedor}`}>
        <h2 className={styles.textCenter}>Nuestros Productos</h2>

        <div className={styles.listadoProductos}>
          <div className={styles.producto}>
            <img src={producto1} alt="Producto 1" />
            <div className={styles.textoProducto}>
              <h3>Producto 1</h3>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un
                impresor.
              </p>
              <p className={styles.precio}>$10,000MXN</p>
              <Link to={"#"} className={styles.btn}>
                Agregar al Carrito
              </Link>
            </div>
          </div>
          <div className={styles.producto}>
            <img src={producto2} alt="Producto 2" />
            <div className={styles.textoProducto}>
              <h3>Producto 2</h3>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen.{" "}
              </p>
              <p className={styles.precio}>$10,000MXN</p>
              <Link to={"#"} className={styles.btn}>
                Agregar al Carrito
              </Link>
            </div>
          </div>
          <div className={styles.producto}>
            <img src={producto3} alt="Producto 3" />
            <div className={styles.textoProducto}>
              <h3>Producto 3</h3>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen.{" "}
              </p>
              <p className={styles.precio}>$10,000MXN</p>
              <Link to={"#"} className={styles.btn}>
                Agregar al Carrito
              </Link>
            </div>
          </div>
          <div className={styles.producto}>
            <img src={producto4} alt="Producto 4" />
            <div className={styles.textoProducto}>
              <h3>Producto 4</h3>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen.{" "}
              </p>
              <p className={styles.precio}>$10,000MXN</p>
              <Link to={"#"} className={styles.btn}>
                Agregar al Carrito
              </Link>
            </div>
          </div>
          <div className={styles.producto}>
            <img src={producto5} alt="Producto 5" />
            <div className={styles.textoProducto}>
              <h3>Producto 5</h3>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen.{" "}
              </p>
              <p className={styles.precio}>$10,000MXN</p>
              <Link to={"#"} className={styles.btn}>
                Agregar al Carrito
              </Link>
            </div>
          </div>
          <div className={styles.producto}>
            <img src={producto6} alt="Producto 6" />
            <div className={styles.textoProducto}>
              <h3>Producto 6</h3>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen.{" "}
              </p>
              <p className={styles.precio}>$10,000MXN</p>
              <Link to={"#"} className={styles.btn}>
                Agregar al Carrito
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className={`${styles.siteFooter} `}>
        <div className={`${styles.gridFooter} ${styles.contenedor}`}>
          <div>
            <h3>Categorias</h3>
            <nav className={styles.footerMenu}>
              <Link>Cocina</Link>
              <Link>Oficina</Link>
              <Link>Jardin</Link>
              <Link>Cochera</Link>
              <Link>Dormitorio</Link>
            </nav>
          </div>
          <div>
            <h3>Sobre Nosotros</h3>
            <nav className={styles.footerMenu}>
              <Link>Nuestra Historia</Link>
              <Link>Mision, Vision y Valores</Link>
              <Link>Carreras</Link>
              <Link>Politica de Privacidad</Link>
              <Link>Terminos del Servicio</Link>
            </nav>
          </div>
          <div>
            <h3>Soporte</h3>
            <nav className={styles.footerMenu}>
              <Link>Preguntas Frecuentes</Link>
              <Link>Ayuda en Linea</Link>
              <Link>Confianza y Seguridad</Link>
            </nav>
          </div>
        </div>
        <p className={styles.copyright}>
          Todos los derechos Reservados, TiendaMuebles
        </p>
      </footer>
    </>
  );
};
