import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { FiUser, FiTag, FiImage } from 'react-icons/fi';
import Pizza from '../models/Pizza';
import './styles.scss';

interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza: Pizza) => void; 
    handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, handleToggleEdit }) => {
    const [editPizza, setEditPizza] = 
        useState<Pizza>(data)


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setEditPizza({
            ...editPizza,
            [name]: value
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const { title, price, img } = editPizza;

        if (title && price && img) {
            updatePizza(editPizza);
            handleToggleEdit();
        }
    }

    return (
        <form 
            className='edit-form'
            onSubmit={handleSubmit}>
            <div className="form-field">
                <FiUser />
                <input  
                    name='title'
                    type='text'
                    placeholder='Nome'
                    onChange={handleChange}
                    value={editPizza.title}
                />
            </div>
            <div className="form-field">
                <FiTag />
                <input  
                    name='price'
                    type='text'
                    placeholder='Prezzo'
                    onChange={handleChange}
                    value={editPizza.price}
                />
            </div>
            <div className="form-field form-field--full">
                <FiImage />
                <input  
                    name='img'
                    type='text'
                    placeholder='Immagine'
                    onChange={handleChange}
                    value={editPizza.img}
                />
            </div>
            <button type='submit'> 
                Conferma 
            </button> 
        </form>
    )
}

export default EditPizzaForm;