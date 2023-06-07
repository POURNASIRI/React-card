
import CradBody from "./body";
import CardButton from "./button";
import CardImage from "./image";
import './cardstyle.css'



const Crad = ({title, text,shearBtn,moreBtn,img}) =>{

    return(
        <div className="card__container">
            <CardImage img={img} />
            <CradBody title ={title} text={text}/>
            <CardButton shearBtn={shearBtn} moreBtn={moreBtn} />
        </div>
    )
}

export default Crad;