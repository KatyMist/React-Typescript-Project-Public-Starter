import React, { FC, useState, useEffect } from 'react';
import AddPizzaForm  from './components/AddPizzaForm';
import DisplayPizzas from './components/DisplayPizzas';
import Logo from './components/Logo';
import Pizza from './models/Pizza';
import './App.scss';

const STORAGE_KEY = 'pizzasList';

const App: FC = () => {
    const [pizzasList, setPizzasList] = useState<Pizza[]>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pizzasList));
    }, [pizzasList]);

    const addPizza = (newPizza: Pizza) => {
        setPizzasList([...pizzasList, newPizza])
    }

    const updatePizza = (newPizza: Pizza) => {
        setPizzasList(pizzasList.map((pizza) => 
            (pizza.id === newPizza.id ? newPizza : pizza)))
    }

    const deletePizza = (id: number) => {
        const newPizzasList = pizzasList.filter(pizza => pizza.id !== id); 
        setPizzasList(newPizzasList)
    }

    return (
        <div className="App">
            <div className="wrap">
                <Logo />
                <AddPizzaForm 
                    addPizza={addPizza}
                />

                <DisplayPizzas 
                    pizzasList={pizzasList}
                    deletePizza={deletePizza}
                    updatePizza={updatePizza}
                />
            </div>
        </div>
    );
}

export default App;