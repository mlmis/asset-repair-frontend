// frontend/src/components/CustomFieldBuilder.js
import React, { useState } from 'react';

function CustomFieldBuilder({ onSave }) {
  const [fields, setFields] = useState([
    { label: '', type: 'text', required: false, options: [] }
  ]);

  const handleChange = (index, key, value) => {
    const updated = [...fields];
    updated[index][key] = value;
    setFields(updated);
  };

  const addField = () => {
    setFields([...fields, { label: '', type: 'text', required: false, options: [] }]);
  };

  const addOption = (index) => {
    const updated = [...fields];
    updated[index].options.push('');
    setFields(updated);
  };

  const handleOptionChange = (fieldIndex, optionIndex, value) => {
    const updated = [...fields];
    updated[fieldIndex].options[optionIndex] = value;
    setFields(updated);
  };

  return (
    <div>
      <h3>Custom Fields Builder</h3>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            placeholder="Label"
            value={field.label}
            onChange={(e) => handleChange(index, 'label', e.target.value)}
          />
          <select
            value={field.type}
            onChange={(e) => handleChange(index, 'type', e.target.value)}>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
            <option value="select">Select</option>
            <option value="boolean">Boolean</option>
          </select>
          <input
            type="checkbox"
            checked={field.required || false}
            onChange={(e) => handleChange(index, 'required', e.target.checked)}
          /> Required

          {field.type === 'select' && (
            <div>
              {field.options.map((opt, i) => (
                <input
                  key={i}
                  placeholder={`Option ${i + 1}`}
                  value={opt}
                  onChange={(e) => handleOptionChange(index, i, e.target.value)}
                />
              ))}
              <button type="button" onClick={() => addOption(index)}>Add Option</button>
            </div>
          )}
        </div>
      ))}
      <button type="button" onClick={addField}>Add Field</button>
      <button type="button" onClick={() => onSave(fields)}>Save Asset Type</button>
    </div>
  );
}

export default CustomFieldBuilder;
