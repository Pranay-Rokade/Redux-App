import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  const balance = useSelector(state => state.amount);

  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-success mx-2" onClick={()=>{depositMoney(100)}}>+</button>
      Update Balance ({balance})
      <button className="btn btn-success mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
    </div>
  )
}

export default Shop
