



const CradBody = ({title,text}) =>{


    return(
        <div className="card__body">
        <h2 className="card__title">
            {title}
        </h2>

        <p className="card__text">
            {text}
        </p>
        </div>
    )
}
export default CradBody;
