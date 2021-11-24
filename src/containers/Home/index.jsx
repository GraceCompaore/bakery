import PageLayout from '../../components/PageLayout';
import './Home.css';

function Home() {
  return (
    <PageLayout>
      <div className="home-container">
        {/* <img
          src={bg_image}
          alt="bg-image"
          className="bg-no-repeat bg-center w-full"
        /> */}
        <h1 className="text-6xl font-semibold text-white">
          YASOMA, la qualité dans le pain{' '}
        </h1>
      </div>
    </PageLayout>
  );
}

export default Home;
