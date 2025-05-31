import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
