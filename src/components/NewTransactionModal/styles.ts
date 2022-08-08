import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.form`
  h2 {
    color: ${({ theme }) => theme.text_title};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    border-radius: 0.25rem;
    background: ${({ theme }) => theme.input_background};
    border: 1px solid ${({ theme }) => theme.input_border};

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.text_body};
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.shape};
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
