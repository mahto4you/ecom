import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
import MainRouter from './components/MainRouter';

function App() {
	return (
		<Provider store={store}>
			<MainRouter />
		</Provider>
	);
}

export default App;
