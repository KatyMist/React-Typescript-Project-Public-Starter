import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { FiUser, FiTag, FiImage, FiPlus } from 'react-icons/fi';
import Pizza from '../models/Pizza';
import './styles.scss';

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

const initState = {
    title: '',
    price: '',
    img: '',
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = 
        useState<{title: string, price: string, img: string}>(initState)


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setNewPizza({
            ...newPizza,
            [name]: value
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const { title, price, img } = newPizza;

        if (title && price && img) {
            addPizza({
                title,
                img,
                price: Number(price),
                id: Date.now()
            })
            setNewPizza(initState);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <FiUser />
                <input  
                    name='title'
                    type='text'
                    placeholder='Nome'
                    onChange={handleChange}
                    value={newPizza.title}
                />
            </div>
            <div className="form-field">
                <FiTag />
                <input  
                    name='price'
                    type='text'
                    placeholder='Prezzo'
                    onChange={handleChange}
                    value={newPizza.price}
                />
            </div>
            <div className="form-field form-field--full">
                <FiImage />
                <input  
                    name='img'
                    type='text'
                    placeholder='Immagine'
                    onChange={handleChange}
                    value={newPizza.img}
                />
            </div>
            <button type='submit'>
                <FiPlus style={{ verticalAlign: 'middle', marginRight: 6 }} />
                Aggiungi al menu
            </button>
        </form>
    )
}

export default AddPizzaForm;