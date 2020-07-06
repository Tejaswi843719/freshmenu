import React, { useState, useEffect,useReducer } from 'react'
import menureducer from './menureducer'

const useMenuAPI=()=> {
    const ALL_ITEMS ={
        burger: [],
        pizza: [], 
        pasta: [], 
        biryani: [], 
        noodles: [],
        dessert: [],
        sandwich: [],
        paratha: [],
        cart:[]
     }
    const [state, dispatch]=useReducer(menureducer, ALL_ITEMS);
    const {burger,pizza,pasta,biryani,noodles,dessert,sandwich,paratha,cart}=state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/1be2a8f8-b838-11ea-a624-597876a5a65d')
            .then(res => res.json())
            .then(json => {
                let [{ burger, pizza, pasta, biryani, noodles,dessert,sandwich,paratha}] = json
                setTimeout(() => {
                   dispatch({
                       type: 'API_CALL',payload:{
                        burger: [...burger],
                        pizza: [...pizza], 
                        pasta: [...pasta], 
                        biryani: [...biryani], 
                        noodles: [...noodles],
                        dessert: [...dessert],
                        sandwich:[...sandwich],
                        paratha:[...paratha]
                       }
                   })
                }, 1000)
            })
    }, []);
    const handleUpdate=(e,index)=>{
        if(e.target.id=="noodles"){
            (dispatch({type:'ADD_ITEM5',payload:{
                index
            }}))
        }
        if(e.target.id=="biryani"){
            (dispatch({type:'ADD_ITEM4',payload:{
                index
            }}))
        }
        if(e.target.id=="pizza"){
            (dispatch({type:'ADD_ITEM2',payload:{
                index
            }}))
        }
        if(e.target.id=="pasta"){
            (dispatch({type:'ADD_ITEM3',payload:{
                index
            }}))
        }
        if(e.target.id=="burger"){
            (dispatch({type:'ADD_ITEM1',payload:{
                index
            }}))
        }
        if(e.target.id=="dessert"){
            (dispatch({type:'ADD_ITEM6',payload:{
                index
            }}))
        }
        if(e.target.id=="sandwich"){
            (dispatch({type:'ADD_ITEM7',payload:{
                index
            }}))
        }
        if(e.target.id=="paratha"){
            (dispatch({type:'ADD_ITEM8',payload:{
                index
            }}))
        }
    }
    useEffect (() => {
        dispatch({ type: 'TOTAL_AMOUNT' })    
    },[cart])
    const decrementCounter = (index) =>  {
        dispatch({ type: 'DECREMENT_COUNTER', payload: { index } })
    }
    const incrementCounter = (index) =>{
        dispatch({ type: 'INCREMENT_COUNTER', payload: { index } })
    }
    const removeUpdate = (index) => {
        dispatch({ type: 'DELETE_ITEMS', payload: { index } })
    }
    return {
        state,
        handleUpdate,
        removeUpdate,
        incrementCounter,
        decrementCounter
    }
}

export default useMenuAPI