import { useContext } from "react"
import { CardContext } from "../context/context"


export default function DisplayCards() {

    const {cards} = useContext(CardContext)

    return (
        <div className="card-container">
            {cards.map((card) => {
                return (
                    <div className="card" key={card.id}>
                        <img src={card.image} alt={card.title} />
                        <div className="card-body">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}