import React from "react";
import Sidebar from "./components/Sitebar";
import Headerlinks from "./components/Headerlinks";
import Tabsclearfix from "./components/Tabsclearfix";
import Articleright from "./components/Articleright";
import Primeiroconteudo from "./components/Primeiroconteudo";
import Categories from "./components/Categories";
import Segundoconteudo from "./components/Segundoconteudo";
import Terceiroconteudo from "./components/Terceiroconteudo";
import Lavenderbox from "./components/Lavenderbox";
import Pagefooter from "./components/Pagefooter";
import Contentspanel from "./components/Contentspanel";
import './Style.css';


export default function App() {
  return (
    <div className="wrapAll clearfix">
      <Sidebar />
      <div className="mainsection">
        <Headerlinks />
        <Tabsclearfix />
        <div className="articleright">
          <Primeiroconteudo />
          <Articleright />
          <Segundoconteudo />
          <div className="contetspanel">
            <Contentspanel />
          </div>
           <Terceiroconteudo />
           <div className="lavederbox">
            <Lavenderbox />
           </div>
            <Categories />
        </div>
        <Pagefooter />
      </div>
    </div>
  );
}
