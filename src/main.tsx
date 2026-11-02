import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';

// No StrictMode: Arwes 1.0.0-next animators don't survive its dev-only double mount,
// which leaves every animated element stuck in its hidden state.
createRoot(document.getElementById('root')!).render(<App />);
