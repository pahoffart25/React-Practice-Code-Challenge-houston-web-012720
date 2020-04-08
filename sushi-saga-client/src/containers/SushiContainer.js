import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log(props.sushis)
  return (
    <Fragment>
      <div className="belt">
         {props.sushis.map(sushi => <Sushi sushi={sushi} eat={props.eat} cahs={props.cash}/>)} {/* gives us a single sushi make sure we import */}
        <MoreButton fourMore={props.fourMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer