import { useContext } from 'react';
import { AppContext } from '../../../context/app.context';

export function Action() {
  const { isActiveCall, setCall, setActiveCall, setPhoneNumber } =
    useContext(AppContext);

  const handleClick = () => {
    setCall(true);

    setTimeout(() => {
      setCall(false);
      setActiveCall(false);
      setPhoneNumber('');
    }, 5000);
  };

  return (
    <>
      {isActiveCall ? (
        <a href="#" className="call active" onClick={() => handleClick()}>
          Call
        </a>
      ) : (
        <a href="#" className="hang active" onClick={() => handleClick()}>
          Hang
        </a>
      )}
      {isActiveCall && (
        <a href="#" className="call active" onClick={() => handleClick()}>
          Call
        </a>
      )}
    </>
  );
}
