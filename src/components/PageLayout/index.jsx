import Footer from '../Footer';
import Header from '../Header';
import styled from 'styled-components';

const ChildrenContainer = styled.div`
  min-height: 80vh;
`;

function PageLayout({ children }) {
  return (
    <div>
      <Header></Header>

      <ChildrenContainer>{children}</ChildrenContainer>

      <Footer></Footer>
    </div>
  );
}
export default PageLayout;
