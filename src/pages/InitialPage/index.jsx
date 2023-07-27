import { Fragment } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import banner from "../../assets/banner.png";
import "./initialPage.css";

function InitialPage() {
  return (
    <Fragment>
      <Header />
      <main>
        <section className="mainSection">
          <Menu />
          <div className="image">
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="Imagem da terra" />
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default InitialPage;
