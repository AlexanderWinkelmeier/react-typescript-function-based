import ReactDOM from 'react-dom/client';
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch';
import EventComponent from './events/EventComponent';
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

root.render(<App />);
