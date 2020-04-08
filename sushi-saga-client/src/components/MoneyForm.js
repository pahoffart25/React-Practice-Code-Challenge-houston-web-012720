import React, { Fragment } from 'react'

const MoneyForm = (props) => { //since it is functional make sure to accept the props
  return ( <div>
        <form onSubmit={props.addMoney}>
        <input type="text"/>
        <input type="submit"/>
        </form>

        </div>)}

  export default MoneyForm