import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-600);
  margin: 0;
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo>The Cloud Cabin</Logo>
      <HeaderRight>
        <UserAvatar />
        <HeaderMenu />
      </HeaderRight>
    </StyledHeader>
  );
}

export default Header;
