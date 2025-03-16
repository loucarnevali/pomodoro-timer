import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  height: 100vh;
  margin: 5rem auto;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin: 5rem;
    height: calc(100vh - 10rem);
  }

  @media (max-width: 768px) {
    margin: 5rem 2rem;
    height: calc(100vh - 10rem);
  }

  @media (max-width: 425px) {
    margin: 2rem 1rem;
    height: calc(100vh - 5rem);
  }
`;
