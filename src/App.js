import React from 'react';
import Reservation from './components/Reservation'
import MiniFormik from './components/MiniFormik'
import './App.css';

function App() {
  return (
    <div className="App">
      <MiniFormik
        initialValues={{ isGoing: true, numberOfGuests: 2 }}
        submit={values => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          handleSubmit
        }) => {
          return (
            <Reservation
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              handleSubmit={handleSubmit}
            />
          );
        }}
      </MiniFormik>
    </div>
  );
}

export default App;
