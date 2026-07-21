import { Navigate } from "react-router";
import { useEffect } from "react";
import {CartContext} from '../context/CartContext'
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {

    const {user}=useContext(CartContext);

    
    console.log(" user in protected route", user);
    if (!user) {
        console.log("Navigating to login");
        return <Navigate to="/login" />;
    }
    return children;

};

export default ProtectedRoute;
