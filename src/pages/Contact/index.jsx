import PageLayout from '../../components/PageLayout';
import FormContact from './FormContact';
import mybread from './pains.jpg';

function Contact() {
  return (
    <PageLayout>
      <div className="flex flex-row">
        <FormContact></FormContact>
        <div className="mx-40 bg-gray-100">
          <img src={mybread} className="m-20 h-xl" />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="py-2 mx-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.4446904713354!2d-1.6506186851428661!3d48.12094706029941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480edef6d4f67d5b%3A0x53bfcdea72fb31c5!2sRue%20des%20Plantes%2C%2035700%20Rennes!5e0!3m2!1sfr!2sfr!4v1635950032573!5m2!1sfr!2sfr"
            className="max-w-md h-80"
          ></iframe>
        </div>
        <div className="mx-20 align-center">
          <h2 className="mx-40 text-black text-2xl font-semibold align-center ">
            {' '}
            Horaires d'ouverture
          </h2>
          <p className="mx-40 align-center">
            Lundi - Jeudi 7h00 - 19h00 <br />
            Vendredi - Samedi 7h00 - 20h00 <br />
            Dimanche 6h00 - 12h00
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
export default Contact;
