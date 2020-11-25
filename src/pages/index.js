import styles from '../styles/Index.module.css';
import Component from "../components/ComponentCar";
import axios from "axios";

function Home({cars}) {

  const linkNoImages = "https://trali.com.br/wp-content/uploads/2018/04/Produto-sem-imagem.jpg";
  const linkImage = "http://cloud.autosim.mangotest.com/rs/product/image";

  return (
    <div className={styles.container}>

        {cars.map((car)=>(
          <Component key={car.id}
            car_name={car.nameModel}
            car_year={car.yearModel}
            car_type={car.segment}
            car_fuel={car.fuel}
            car_km={car.km}
            car_price={car.priceFipe}
            linkImage = {car.gallery.length>0 ? `${linkImage}/${car.id}/${car.gallery[0].id}`: linkNoImages }
          />
        ))}
    </div>
  )
}

export async function getServerSideProps(context){

  const response = await axios.get('http://cloud.autosim.mangotest.com/rs/product/listAllActive');
  const data = response.data["data"];

  return{
    props:{cars : data}
  };

}

export default Home;