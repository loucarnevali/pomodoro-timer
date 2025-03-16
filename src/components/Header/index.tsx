import { Scroll, Timer } from 'phosphor-react';
import { HeaderContainer } from './styles';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <span>
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
