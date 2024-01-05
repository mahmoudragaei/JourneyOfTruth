import { useState } from 'react'
import { CORE_CONCEPTS } from './data.js'
import componentsImg from './assets/components.png'
import Header from './Components/Header.jsx'
import CoreConcept from './Components/CoreConcept.jsx'
import TabButton from './Components/TabButton.jsx'
import { EXAMPLES } from './data.js'
const surveyJson = {
  title: "American History",
  showProgressBar: "bottom",
  firstPageIsStarted: true,
  startSurveyText: "Start Quiz",
  pages: [{
      elements: [{
          type: "html",
          html: "You are about to start a quiz on American history. <br>You will have 10 seconds for every question and 25 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
      }, {
          type: "text",
          name: "username",
          titleLocation: "hidden",
          isRequired: true
      }]
  }, {
      elements: [{
          type: "radiogroup",
          name: "civilwar",
          title: "غاتساا ",
          choices: [
              "1796-1803", "1810-1814", "1861-1865", "1939-1945"
          ],
          correctAnswer: "1861-1865"
      }]
  }, {
      elements: [{
          type: "radiogroup",
          name: "libertyordeath",
          title: "Whose quote is this: \"Give me liberty, or give me death\"?",
          choicesOrder: "random",
          choices: [
              "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
          ],
          correctAnswer: "Patrick Henry"
      }]
  }, {
      elements: [{
          type: "radiogroup",
          name: "magnacarta",
          title: "What is Magna Carta?",
          choicesOrder: "random",
          choices: [
              "The foundation of the British parliamentary system",
              "The Great Seal of the monarchs of England",
              "The French Declaration of the Rights of Man",
              "The charter signed by the Pilgrims on the Mayflower"
          ],
          correctAnswer: "The foundation of the British parliamentary system"
      }]
  }],
  completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
  completedHtmlOnCondition: [{
      expression: "{correctAnswers} == 0",
      html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
  }, {
      expression: "{correctAnswers} == {questionCount}",
      html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
  }]
};

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
console.log(surveyJson);
  function handleSelect(selectedButton) {
    //console.log(selectedButton)
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept{...conceptItem} />)}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic == 'components'}
              onSelect={() => handleSelect('components')}>components</TabButton>
            <TabButton isSelected={selectedTopic == 'jsx'}
              onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props'}
              onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state'}
              onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;