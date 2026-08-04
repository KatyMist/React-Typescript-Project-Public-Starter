import React, { FC } from 'react';
import SinglePizzas from './SinglePizza';
import Pizza from '../models/Pizza';

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void ;
    deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {
    return(
        <div className="container">
            {pizzasList.map((pizza) => {
                return <SinglePizzas 
                            key={pizza.id} 
                            deletePizza={deletePizza}
                            updatePizza={updatePizza}
                            pizza={pizza} />
            })}
        </div>
    )
}

export default DisplayPizzas;