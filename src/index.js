import './assets/styles/style.sass';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import { Provider } from 'react-redux';
import store from './store/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);