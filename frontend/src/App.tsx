import React from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Dashboard, NotFound, InternalServerError } from 'pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/error" element={<InternalServerError />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
