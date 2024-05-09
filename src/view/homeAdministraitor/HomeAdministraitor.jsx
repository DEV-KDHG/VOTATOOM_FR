import Header from "../../Header/HeaderLogo";
import CardFunctions from "../../shared/cardFunctions/CardFunctions";
import style from "./HomeAdministraitor.module.css";

const HomeAdministraitor = () => {
 return (
    <>
      <div className={style.container}>
      <Header/>
       <div className={style.title}>
          <h1> Home Administrador</h1>
          <div className={style.container_cards}>
            <CardFunctions  img={"https://cdn.icon-icons.com/icons2/936/PNG/512/user-shape_icon-icons.com_73346.png"}  to={"/OptionalStudents"} name={"Estudiantes"} />
                      <CardFunctions img="src\images\Aspirante.png" to={"/OptionalCandidates"} name={"Aspirante"} />
                      <CardFunctions img="src\images\Veedoress_1___1___1_-removebg-preview.png" to={"/"} name={"Veedores"}/>
                      <CardFunctions img="src\view\homeAdministraitor\conteoDeVotos-removebg-preview.png" to={"/login"} name={"Conteo de votos"}/>
          </div>
        </div> 
      </div>
    </>
  );
};

export default HomeAdministraitor;
