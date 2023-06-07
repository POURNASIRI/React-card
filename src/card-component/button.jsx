

const CardButton = ({shearBtn,moreBtn}) =>{


    return(
        <div className="btn__container">
          <div className="card__btn">
            <button className="btn">{shearBtn}</button>
            <button className="btn">{moreBtn}</button>
          </div>
        </div>
    )
}

export default CardButton;