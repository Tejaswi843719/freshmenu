import React, { useEffect, useReducer } from 'react';
import { Carousel } from 'react-bootstrap';

const Slide = () => {
    const INITIAL_STATE = {
        images: [],
    }
    const reducer = (state, action) => {
        const { type, data } = action;
        switch (type) {
            case 'Fetch_Data': {
                return {
                    ...state, ...data
                }
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const { images } = state
    useEffect(() => {
        fetch('https://jsonblob.com/api/a7e087cd-b7a8-11ea-abe1-456686408403').then(response => response.json()).then(json => {
            dispatch({ type: 'Fetch_Data', data: { images: [...json] } })
        })
    }, []);
    return (
        <>
            <Carousel className="container">
                {images.map((item) => (
                    <Carousel.Item>
                        <img   style = {{width:"100%",height:"400px"}} src={item} alt="Los Angeles" />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default Slide;