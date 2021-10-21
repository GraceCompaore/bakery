import Card from '../../components/Card'
import styled from 'styled-components'

function Menu() {
  const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
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
      <h1>Nos formules</h1>
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
