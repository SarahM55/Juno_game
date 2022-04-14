import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import './Home.css';

export const Home = () => {
  return (

    <section class="hero is-fullheight juno-background">
      <div className="Home">

        <section class="section">
          <div class="container is-fullhd has-text-centered has-text-white">

            <div className="columns is-centered is-mobile is-multiline">
              <div className="column is-half ">
                <img src="Assets/Logo_half.png" class="image"></img>
              </div>
            </div>

            <div className="columns is-centered is-mobile is-multiline">
              <div className="column  ">

                <br></br>
                <br></br>

                <h1 class="title is-1 has-text-white">How to play</h1>
                <p class="is-size-4">Play a card from your hand by matching it’s colour or number with the Match card in the middle.</p>

                <br></br>

                <p class="is-size-4">If don’t have any cards you can play, then draw a card to end your turn.</p>

                <br></br>

                <p class="is-size-4">First to get rid of all of their cards wins!</p>

                <br></br>
                <br></br>
                <br></br>

                <Link to={'/Game'}>
                  <button class="button is-warning is-large">
                    <span class="icon">
                      <FontAwesomeIcon icon={faGamepad} />
                    </span>
                    <span>Play</span>
                  </button>
                </Link>
              </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <div className="columns is-centered is-mobile is-multiline">
              <div className="column ">
                <div className="box">
                  <a href="https://github.com/meghanblyth/Juno_game" class="is-size-2">See this project on GitHub</a>
                  <p class="is-size-4">Created by: <a href="https://github.com/meghanblyth/">@Meg</a>, <a href="https://github.com/SarahM55/">@Sarah</a>, <a href="https://github.com/harmlessgoose/">@Peter</a> & <a href="https://github.com/Haroon2021/">@Haroon</a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </section>
  );
}
