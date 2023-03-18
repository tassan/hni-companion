import styled from "styled-components";

export const LoggedInUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  

  &:hover {
    transform: scale(1.1);
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1);
  }

  a {
    text-decoration: none;
    color: #5570a9;
    font: 400 1.6rem Roboto;
    
    &:hover {
        font-weight: 600;
    }
  }
`;

export const LoginCallToAction = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  
    &:hover {
        transform: scale(1.1);
    }
`;

export const LogoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  
    &:hover {
        transform: scale(1.1);
    }
`;