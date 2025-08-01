import React, { useEffect, useState } from 'react'
import { Doctor } from '../types'
import DoctorCard from '../components/DoctorCard'
import SearchBar from '../components/SearchBar'

const Home: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch('/doctors.json')
      .then(res => res.json())
      .then(setDoctors)
  }, [])

  const filtered = doctors.filter(
    d => d.name.toLowerCase().includes(query.toLowerCase()) ||
         d.specialization.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Doctors</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(doc => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  )
}

export default Home
