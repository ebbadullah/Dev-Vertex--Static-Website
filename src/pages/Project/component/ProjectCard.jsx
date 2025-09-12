import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
      <div className="relative overflow-hidden h-56">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white"><p className="font-medium">{project.category}</p></div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">{tech}</span>
          ))}
        </div>
        
        <Link to={`/project/${project.id}`} className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors mt-auto">
          View Details
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard