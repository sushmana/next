import React from 'react'

const ServiceCategory = ({ params }: { params: { category: string } }) => {
  return (
    <div>
      <h2>Service: {params.category}</h2>
    </div>
  )
}

export default ServiceCategory
