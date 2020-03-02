import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddForm = (props) => {
    const { addItem } = props
    const [obj, setObj] = useState({
        title: '',
        text: ''
    })
    const handleChange = (e, prop) => {
        const newObj = obj
        newObj[prop] = e.target.value
        setObj(newObj)
    }

    const handleSave = () => {
        addItem(obj)
    }

    return (
        <form className="add-form">
            <Link to="/">
                <button className="btn btn-primary">Back</button>
            </Link>
            <div className="form-group">
                <div className="add-form__row">
                    <h4>
                        <label for="title">Title</label>
                    </h4>
                    <input type="text" className="form-control" id="title" placeholder="title" onChange={(e) => handleChange(e, 'title')} />
                </div>
                <div className="add-form__row">
                    <h4>
                        <label for="description">Description</label>
                    </h4>
                    <textarea rows="8" className="form-control" placeholder="Enter text" id="description" onChange={(e) => handleChange(e, 'text')} />
                </div>
            </div>
            <button type='submit' onClick={handleSave} className="btn btn-primary">
              Submit
            </button>
        </form>
    );
};

export default AddForm;