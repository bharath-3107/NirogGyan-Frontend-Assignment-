import React from 'react'
import { Doctor } from '../types'
import { Link } from 'react-router-dom'

interface Props {
  doctor: Doctor
}

const DoctorCard: React.FC<Props> = ({ doctor }) => (
  <Link to={`/doctor/${doctor.id}`} className="block bg-white p-4 rounded shadow hover:shadow-lg transition">
    <img src={doctor.image} alt={doctor.name} className="h-40 w-full object-cover rounded" />
    <h2 className="text-lg font-bold mt-2">{doctor.name}</h2>
    <p className="text-sm text-gray-600">{doctor.specialization}</p>
    <p className="mt-1 text-blue-500 font-medium">{doctor.status}</p>
  </Link>
)

export default DoctorCard
