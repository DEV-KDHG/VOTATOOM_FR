
import HeaderLogo from "../../../Header/HeaderLogo";
import CardFunctions from "../../../shared/cardFunctions/CardFunctions";
import { Link } from 'react-router-dom'; 
import style from "../HOME/HomeAdministraitor.module.css"
import HeaderAdmin from "../../../Headers/HeaderAdmin";

const HomeAdministraitor = () => {
 return (
    <>
      <div className={style.container}>
      <HeaderAdmin/>
    
       <div className={style.title}>
          <h1> Home Administrador</h1>
          <div className={style.container_cards}>
            <CardFunctions  img="src\images\download-removebg-preview.png"  to={"/OptionalStudents"} name={"Estudiantes"} />
                      <CardFunctions img="src\images\Aspirante.png" to={"/PanelCargaAspirantes"} name={"Aspirante"} />
                      <CardFunctions img="src\images\Jury-removebg-preview (1).png" to={"/OptionalVeedor"} name={"Veedores"}/>
                      <CardFunctions img="src/images/conteoDeVotos-removebg-preview.png" to={"/login"} name={"Conteo de votos"}/>
          </div>
        </div> 
      </div>
    </>
  );
};

export default HomeAdministraitor;
