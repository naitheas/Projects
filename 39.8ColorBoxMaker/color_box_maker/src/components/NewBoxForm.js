import React, { useState } from 'react';


const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    color: '#000000',
    width: 0,
    height: 0,
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { color, width, height } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="NewBoxForm-inputs">
          <div className="NewBoxForm-input">
            <label htmlFor="color" className="NewBoxForm-label">
              Color
            </label>
            <input
              type="color"
              name="color"
              id="color"
              value={color}
              onChange={handleChange}
              required
            />
          </div>
          <div className="NewBoxForm-input">
            <label htmlFor="width" className="NewBoxForm-label">
              Width:{' '}
              {width ? <span>{width} pixels</span> : <span>0 pixels</span>}
            </label>
            <input
              type="number"
              name="width"
              id="width"
              min="100"
              max="300"
              value={width}
              onChange={handleChange}
              required
            />
          </div>
          <div className="NewBoxForm-input">
            <label htmlFor="height" className="NewBoxForm-label">
              Height:{' '}
              {height ? <span>{height} pixels</span> : <span>0 pixels</span>}
            </label>
            <input
              type="number"
              name="height"
              id="height"
              min="100"
              max="300"
              value={height}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="NewBoxForm-submit">
          <button>Add Box</button>
        </div>
      </form>
    </div>
  );
};

export default NewBoxForm;