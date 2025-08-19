import React from 'react'
import Button from '@mui/material/Button';

function MyCart() {
    return (
        <>
            <div className='container text-center' style={{ padding: "6%" }}>
                <h1 className='mb-5' style={{ color: "#1b5e20" }}>Your List is Empty</h1>
                <Button variant="contained" color="success">
                    Check your Menu
                </Button>
            </div>
        </>
    )
}

export default MyCart
