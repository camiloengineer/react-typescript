import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }: any) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( (cats: any) => [ inputValue, ...cats ] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit } >
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}