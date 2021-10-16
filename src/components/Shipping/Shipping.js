import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="shipping">
            <div>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} placeholder="Type your name" />
                    <br />

                    <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Your email" />
                    <br />
                    <input defaultValue="" {...register("Phone")} placeholder="Phone number" />
                    <br />
                    <input defaultValue="" {...register("Country")} placeholder="Country name" />
                    <br />
                    <input type="submit" />
                    <br />
                    {errors.email && <span className="text-danger">Email is required</span>}
                </form>
            </div>
        </div>
    );
};

export default Shipping;