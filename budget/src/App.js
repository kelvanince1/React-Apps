import { Stack, Container, Button } from 'react-bootstrap';
import AddBudgetModal from './components/AddBudgetModal';
import BudgetCard from './components/BudgetCard';

function App() {
  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">
            Budgets
          </h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', alignItems: 'flex-start' }}>
          <BudgetCard gray name="Entertainment" amount={200} max={1000}>

          </BudgetCard>
        </div>
      </Container>

      <AddBudgetModal show />
    </>
  );
}

export default App;

