
import './index.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { JobFilters } from './components/Filters'
import ResultsHeader from './components/ResultsHeader'
import JobGrid from './components/JobGrid'
import { JobApplicationModal } from './components/JobApplicationModal'
import { mockJobs, type Job } from './data/mockJobs'
import { useState } from 'react'

function App() {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    experience: "",
    type: "",
    salaryRange: [40, 200] as [number, number],
    datePosted: "",
    companySize: "",
    remote: "",
  })

  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false)

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job)
    setIsApplicationModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsApplicationModalOpen(false)
    setSelectedJob(null)
  }

  return (
    <div className="min-h-screen bg-background ">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Find Your Dream Job</h1>
          <p className="text-muted-foreground text-lg">Discover opportunities that match your skills and aspirations</p>
        </div>

        <SearchBar />

        <div className="my-6">
          <JobFilters filters={filters} onFiltersChange={setFilters} />
        </div>

        <ResultsHeader totalJobs={mockJobs.length} showingJobs={mockJobs.length} />

        <JobGrid jobs={mockJobs} onApplyClick={handleApplyClick} />
      </div>

      <JobApplicationModal
        job={selectedJob}
        isOpen={isApplicationModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}
export default App
