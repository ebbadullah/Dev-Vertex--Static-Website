import React from "react"

const ServiceCard = ({ service, index }) => {
  return (
    <div
      className="group bg-white hover:bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-blue-100"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {service.icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

      <ul className="space-y-2 mb-6">
        {service.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-600">
            <svg
              className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center pt-4 border-t border-blue-100">
        <div>
          <div className="text-sm text-gray-500">Starting at</div>
          <div className="text-lg font-semibold text-blue-600">{service.startingPrice}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Timeline</div>
          <div className="text-sm font-medium text-gray-900">{service.timeline}</div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard