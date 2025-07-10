import React from 'react';
import { Formik, Form, Field } from 'formik';

function DynamicForm({ fields, onSubmit }) {
  const initialValues = fields.reduce((acc, field) => {
    acc[field.label] = '';
    return acc;
  }, {});

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        {fields.map((field) => (
          <div key={field.label}>
            <label>{field.label}</label>
            {field.type === 'text' && <Field type="text" name={field.label} />}
            {field.type === 'number' && <Field type="number" name={field.label} />}
            {field.type === 'date' && <Field type="date" name={field.label} />}
            {field.type === 'select' && (
              <Field as="select" name={field.label}>
                {field.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </Field>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default DynamicForm;
