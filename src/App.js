import React, { Component } from 'react';
import Navbar from './navbar';
import QuestionList from './components/QuestionList';
import Scorebox from './components/Scorebox';
import Results from './components/Results';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: "Which fictional city is the home of Batman?",
          choices: [
            {
              id: 'a',
              text: 'Springfield'
            },
            {
              id: 'b',
              text: 'Gotham'
            },
            {
              id: 'c',
              text: 'Quahog'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: "What is the only man-made object visible from the moon?",
          choices: [
            {
              id: 'a',
              text: 'Great Wall of China'
            },
            {
              id: 'b',
              text: 'Mount Rushmore'
            },
            {
              id: 'c',
              text: 'Tower of Pisa'
            }
          ],
          correct: 'a'
        },
        {
          id: 3,
          text: "What is the largest fish in the ocean?",
          choices: [
            {
              id: 'a',
              text: 'A Whale Shark'
            },
            {
              id: 'b',
              text: 'Lochness Monster'
            },
            {
              id: 'c',
              text: 'Ya mama'
            }
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: "Which artist painted a moustache and goatee on the Mona Lisa?",
          choices: [
            {
              id: 'a',
              text: 'Leonardo da Vinci'
            },
            {
              id: 'b',
              text: 'Michelangelo'
            },
            {
              id: 'c',
              text: 'Marcel DuChamp'
            }
          ],
          correct: 'c'
        },
        {
          id: 5,
          text: "What country would one find 8 of the world's 10 highest mountains?",
          choices: [
            {
              id: 'a',
              text: 'China'
            },
            {
              id: 'b',
              text: 'Nepal'
            },
            {
              id: 'c',
              text: 'Spain'
            }
          ],
          correct: 'b'
        },
        {
          id: 6,
          text: "What is the most popular drink in the world that does not contain alcohol?",
          choices: [
            {
              id: 'a',
              text: 'Tea'
            },
            {
              id: 'b',
              text: 'Coffee'
            },
            {
              id: 'c',
              text: 'Water'
            }
          ],
          correct: 'b'
        },
        {
          id: 7,
          text: "Which is the most common blood type in humans?",
          choices: [
            {
              id: 'a',
              text: 'O'
            },
            {
              id: 'b',
              text: 'A'
            },
            {
              id: 'c',
              text: 'B'
            }
          ],
          correct: 'a'
        },
        {
          id: 8,
          text: "What is the total number of dots on pair of dice?",
          choices: [
            {
              id: 'a',
              text: '21'
            },
            {
              id: 'b',
              text: '42'
            },
            {
              id: 'c',
              text: '28'
            }
          ],
          correct: 'b'
        },
        {
          id: 9,
          text: "What is the closest planet to Earth?",
          choices: [
            {
              id: 'a',
              text: 'Mars'
            },
            {
              id: 'b',
              text: 'The Moon'
            },
            {
              id: 'c',
              text: 'Venus'
            }
          ],
          correct: 'c'
        },
        {
          id: 10,
          text: "Which is the tallest mammal?",
          choices: [
            {
              id: 'a',
              text: 'The giraffe'
            },
            {
              id: 'b',
              text: 'The Blue Whale'
            },
            {
              id: 'c',
              text: 'The elephant'
            }
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    }
  }
  setCurrent(current) {
    this.setState({current});
  }
  setScore(score) {
    this.setState({score});
  }
  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = '';
      var results = <Results {...this.state} />
    } else {
      scorebox = <Scorebox {...this.state} />;
      results = '';
    }
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <h1>React Quiz</h1>
            <p className="lead">A simple quiz application made with React.js</p>
            {scorebox}
            <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
            {results}
          </div>
        </div>
      </div>
    );
  }
}
