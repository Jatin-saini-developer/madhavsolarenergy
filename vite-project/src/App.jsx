import Header            from './components/Header'
import Hero              from './sections/Hero'
import BusinessProblem   from './sections/BusinessProblem'
import StrategicValue    from './sections/StrategicValue'
import SolarModels       from './sections/SolarModels'
import EngineeringCredibility from './sections/EngineeringCredibility'
import DecisionMakers    from './sections/DecisionMakers'
import ProjectProof      from './sections/ProjectProof'
import AssessmentOffer   from './sections/AssessmentOffer'
import LeadForm          from './sections/LeadForm'
import TrustReinforcement from './sections/TrustReinforcement'
import FinalCTA          from './sections/FinalCTA'
import Footer            from './sections/Footer'
import './App.css'

function App() {
  return (
    /*
     * overflow-x-hidden on the root prevents any child from triggering
     * horizontal scroll at any viewport width.
     */
    <div className="overflow-x-hidden min-h-screen bg-white selection:bg-[#4AAB3D] selection:text-white">

      <Header />

      <main id="main-content">
        {/* ── Pass 1 ──────────────────────────────────────────── */}
        <Hero />
        <BusinessProblem />
        <StrategicValue />

        {/* ── Pass 2 ──────────────────────────────────────────── */}
        <SolarModels />
        <EngineeringCredibility />
        <DecisionMakers />
        <ProjectProof />
        <AssessmentOffer />
        <LeadForm />
        <TrustReinforcement />
        <FinalCTA />
      </main>

      <Footer />

    </div>
  )
}

export default App
