
import { element } from 'prop-types';
import './App.css';
import Header from './component/Header';
import Movie from './component/Movie';
import movie from './movie.json';
function App() {

  let login=false;
  return(
    <>
    

    <div className='App'>
      
      
        <Header />
        <div className='main'>
          {
            movie.map((element,index)=>{
              return(
              <Movie key={index+1}
               title={element.Title}
              year={element.Year}
              img={element.Poster}/>
              )
            }
            )
          }
         
        </div>
        </div>
    </>
  );

 
}

export default App;
