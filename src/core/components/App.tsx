import { Actions } from '../../features/components/actions/actions';
import { Info } from '../../features/components/info/info';
import { Keyboard } from '../../features/components/keyboard/keyboard';
import './App.css';
export default function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}
