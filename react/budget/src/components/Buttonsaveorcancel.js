import React from 'react'
import {Button} from 'semantic-ui-react'

function buttonsaveorcancel(){
    return(
        <Button.Group style={{marginTop: 20}}>
          <Button color='red'>Cancel</Button>
          <Button.Or />
          <Button primary> Ok</Button>
        </Button.Group>
    )
}
export default buttonsaveorcancel