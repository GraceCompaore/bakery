import Card from '../../components/Card'
import styled from 'styled-components'
import PageLayout from '../../components/PageLayout'

function Menu() {
  const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

  const categoriesFormules = [
    {
      name: 'Jane Doe',
      jobTitle: 'Devops',
    },
    {
      name: 'John Doe',
      jobTitle: 'Developpeur frontend',
    },
    {
      name: 'Jeanne Biche',
      jobTitle: 'Développeuse Fullstack',
    },
  ]

  return (
      <div>
        <PageLayout></PageLayout>
        <PageTitle>Un savoir faire artisanal</PageTitle>
        <PageSubtitle>
          Chez Shiny nous réunissons les meilleurs profils pour vous.
        </PageSubtitle>
        <CardsContainer>
          {categoriesFormules.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.jobTitle}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      </div>
    )
}
export default Menu