import Header from './components/Header'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  const personalDetails = {
    name: 'Mike Durando',
    location: 'Boston, MA',
    tagline: 'Software Engineer',
    email: 'durandomike@gmail.com',
    availability: 'Open for work',
    brand:
      'I am a Software Engineer who finds success by creating customized and efficient solutions to help improve a project or system through JavaScript, HTML, and CSS. I am driven by being detail and solution oriented. I thrive in a team environment to build user friendly products. Similarly to my experience in the public service sector, I like to know my work has a positive impact on others.'
  }

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  )
}

export default App
