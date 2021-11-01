import PageLayout from '../../components/PageLayout';
import bg_image from './bak.jpg';
import './Home.css';

function Home() {
  return (
    <PageLayout>
      <div className="home-container">
        <img src={bg_image} alt="bg-image" />
        <h1 >YASOMA, la qualité dans le pain </h1>
      </div>
    </PageLayout>
  );
}

export default Home;
