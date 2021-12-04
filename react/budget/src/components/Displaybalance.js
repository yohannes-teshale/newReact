import React from 'react'
import {Statistic} from 'semantic-ui-react'

function Displaybalance({title='your income:', balance='755', color='black'}){
    return(
        <Statistic size='small' color={color}>
        <Statistic.Label>{title}:</Statistic.Label>
        <Statistic.Value>{balance}</Statistic.Value>
      </Statistic>

    )
}
export default Displaybalance;