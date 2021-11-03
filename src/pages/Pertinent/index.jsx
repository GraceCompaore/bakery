import PageLayout from '../../components/PageLayout';
import myimage from './baker.jpg';

function Pertinent() {
  return (
    <PageLayout>
      <h2 className="font-serif text-black text-3xl text-center p-8 text-lg font-semibold">
        A propos de nous
      </h2>
      <section className="flex flex-row">
        <div className="">
          <h4 className="text-black text-2xl p-4 font-semibold">
            {' '}
            Nos pains & viennoiseries
          </h4>
          <p className="px-8 text-justify">
            Nos pains sont cuits dans des fours à sole de pierre pour garantir
            une qualité optimale. Les farines utilisées sont d’origine
            françaises. Nos viennoiseries (croissants, pains au chocolat, pains
            au raisin, etc.) sont 100% pur beurre. La cuisson de nos pains et
            viennoiseries est réalisée tout au long de la journée dans tous nos
            restaurants.
          </p>
          <h4 className="text-black text-2xl p-4 font-semibold"> La qualité</h4>
          <p className="px-8 text-justify ">
            Groupe familial très attaché aux valeurs paysannes, nous avons
            choisi de valoriser les circuits courts et de privilégier des
            élevages et des chaînes de transformation des plus rigoureux, afin
            de vous garantir des produits de qualité.
          </p>
          <h4 className="text-black text-2xl p-4 font-semibold">
            {' '}
            « Fait sur place » chaque jour
          </h4>
          <p className="px-8 text-justify pb-4">
            La majorité de nos produits et recettes sont préparés sur place !
            Tous nos sandwichs, salades et pizzas ainsi que la plupart de nos
            desserts sont préparés ou assemblés dans nos restaurants au plus
            proche des instants de consommation pour garantir une fraicheur et
            une qualité de produits optimales. Par exemple, pour nos tartelettes
            choco-banane,y nos équipes en restaurant confectionnent elles-mêmes
            la ganache et déposent les rondelles de banane fraîche sur les fonds
            de tartelette cuits sur place.
          </p>
        </div>
        <div>
          <img src={myimage} className="m-12 py-20 max-w-xl" />
        </div>
      </section>
    </PageLayout>
  );
}
export default Pertinent;
