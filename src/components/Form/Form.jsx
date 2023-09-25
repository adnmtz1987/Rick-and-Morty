import { useState } from "react";
import validation from "../Validation/Validation";
import './Form.css'

const Form = ({login}) => {

    const [errors, setErrors] =useState({});

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Ingrese su Email"
                />
                {errors.email && <p className="mesage-error">{errors.email}</p>}
                <br />
                <label htmlFor="password">Password</label>
                <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Ingrese su Password"
                />
                {errors.password && <p className="mesage-error">{errors.password}</p>}

                <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default Form;