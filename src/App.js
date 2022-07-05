import logo from './logo.svg';
import './App.css';
import Card from './components/Cardinfo/Card';
import Contact from './components/Contact';
import Jokes from './components/Jokesinfo/Jokes';
import { JokesData } from './components/Jokesinfo/JokesData';
import { CardData } from './components/Cardinfo/CardData';
import Travel from './components/TravelProject/Travel';
import Meme from './components/Meme/Meme';


function App() {
  const cardElements = CardData.map((card) => {
    return <Card
      key={card.id}
      {...card}
    />
    
    
  });
  /*const things = ['things 1',  'things 2'];

  const thing = things.map((item) => {
    return (<p>{item}</p>)
  });

  const handlesubmit = () => {
    console.log(thing)
    return (things.length + 1)
    
  }*/
 
  
  return (
    <> <section className='app'>
      < Card 
        id='1'
        img='./jose-pedro-ortiz-0O2oxmMc5aY-unsplash.jpg'
        ratings="5.0"
        reviewCount='6'
        title='stop the war in Ukraine'
        price='136'
        openSpots= '0'
        location='online' />
      
      <Card
        id='2'
        img='./dea-piratedea-jd2v3qH-w7U-unsplash.jpg'
        ratings="5.0"
        reviewCount='6'
        country='Russia'
        title='we need no war'
        price= '140'
        openSpots= '0'
        location='online' />
      
        <Card
        id='2'
        img='./evergreens-and-dandelions-_HH9c6qPLOs-unsplash.jpg'
        ratings="5.0"
        reviewCount='6'
        country='UK'
        title='send love, not tanks '
        price= '136'
        openSpots= '5'
        location='online' />
      
        <Card
        id='3'
        img='./tim-vh-Xojdrfk7qAE-unsplash.jpg'
        ratings="5.0"
        reviewCount='6'
        country='Ukraine'
        title='stop the genocide'
        price= '139'
        openSpots= '27'
        location= 'online'/>
    </section>
      
      
     
      
    </>
  );
}

export default App;
 