import './assets/styles/style.sass';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import store from './store/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);