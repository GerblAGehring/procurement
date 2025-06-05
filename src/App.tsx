import { Header } from './components/layout/Header';
import { Container } from './components/layout/Container';
import { EvaluationPage } from './pages/EvaluationPage';


function App() {
  return (
    <>
      <Header />
      <Container>
        <EvaluationPage />
      </Container>
    </>
  );
}

export default App;

