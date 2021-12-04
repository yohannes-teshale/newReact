import { Container,Form,Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import Displaybalance from './components/Displaybalance';
import Mainheader from '.\\components\\Mainheader';
import Buttonsaveorcancel from './components/Buttonsaveorcancel';
import Entryline from './components/Entryline';

function App() {
  return (
    <Container>
      <Mainheader title='budget'/>
      <Displaybalance title='balance' balance="3123" />
      <Segment textAlign='center'>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Displaybalance title='Incoming' balance="6565" color= 'green' />
              </Grid.Column>
            <Grid.Column> 
             
              <Displaybalance title='Expenses' balance="453.67"  color='red' />
            </Grid.Column> 

          </Grid.Row>
        </Grid>
      </Segment>
      <Mainheader title='History' type='h3' />
      
     <Mainheader title='Add new transaction' type='h3'/>
     <Entryline discription='income' value= "500.00" />
     <Entryline discription='income' value= "1500.00" />
     <Entryline discription='income' value= "500.00"  isExpense/>


      <Form unstackable>
        <Form.Group> 
          <Form.Input
          icon='tags' 
          width={12}
          label="Discription"
          placeholder="new shiny thing"></Form.Input>
          <Form.Input
          width={4}
          label='value'
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'></Form.Input>
        </Form.Group>
        <Buttonsaveorcancel />
      </Form>
    </Container>
    );
  }
export default App;
