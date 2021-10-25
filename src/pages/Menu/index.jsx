
import styled from 'styled-components'
import PageLayout from '../../components/PageLayout'
import Categories from '../../components/Categories/Categories'

function Menu() {

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

  return (
      <div>
        <PageLayout></PageLayout>
        <PageTitle>Un savoir faire artisanal</PageTitle>
        <Categories></Categories>
      </div>
    )
}
export default Menu
