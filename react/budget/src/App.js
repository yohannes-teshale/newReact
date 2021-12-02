import { Button, Container,Form,Grid,Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container> 
      <Header as='h1'> Budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>
      <Segment textAlign='center'>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign:'center'}}>
                  Incoming:
                </Statistic.Label>
                <Statistic.Value>4342,54</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column> <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign:'center'}}>
                  spendings:
                </Statistic.Label>
                <Statistic.Value>2757.776</Statistic.Value>
              </Statistic></Grid.Column>

          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h3'>History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width= {10}>something</Grid.Column>
            <Grid.Column width={3}>$10.00</Grid.Column>
            <Grid.Column width= {3}>
              <Icon name="edit" bordered/>
              <Icon name='trash' bordered/>
            </Grid.Column>


          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h3'>Add new transaction</Header>
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
        <Button.Group style={{marginTop: 20}}>
          <Button color='red'>Cancel</Button>
          <Button.Or />
          <Button primary> Ok</Button>
        </Button.Group>
      </Form>
    </Container>
    );
  }
export default App;
