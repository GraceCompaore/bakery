import PageLayout from '../../components/PageLayout';
import bg_image from './bak.jpg';
import './Home.css';

function Home() {
  return (
    <PageLayout>
      <div className="contenant">
        <img src={bg_image} />
        <h1>YASOMA, la qualité dans le pain </h1>
      </div>
    </PageLayout>
  );
}

export default Home;
