import { Scroll, Timer } from 'phosphor-react';
import { HeaderContainer } from './styles';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <span>
        {/* <img
          src="https://cdn-icons-png.freepik.com/512/12238/12238179.png"
          // src="https://cdn-icons-png.flaticon.com/512/14359/14359087.png"
          alt=""
          width={'100px'}
        /> */}
        <p
          style={{
            fontFamily: 'Luckiest Guy',
            fontWeight: '400',
            fontSize: '42px',
          }}
        >
          POMODORO TIMER
        </p>
      </span>
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
