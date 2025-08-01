import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Doctor } from '../types'

const DoctorProfile: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [doctor, setDoctor] = useState<Doctor | null>(null)

  useEffect(() => {
    fetch('/doctors.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find((d: Doctor) => d.id === id)
        setDoctor(found || null)
      })
  }, [id])

  if (!doctor) return <p className="p-6">Doctor not found</p>

  return (
    <div className="p-6">
      <img src={doctor.image} alt={doctor.name} className="w-full h-60 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold">{doctor.name}</h2>
      <p className="text-lg text-gray-600">{doctor.specialization}</p>
      <p className="text-blue-500 mt-2">{doctor.status}</p>
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => navigate(`/book/${doctor.id}`)}
      >
        Book Appointment
      </button>
    </div>
  )
}

export default DoctorProfile
