import React from 'react'

const Loading = () => {
  return (
     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 animate-fadeIn">
          <div className="text-center space-y-6">
            {/* Spinner Loader */}
            <div className="w-10 h-10 border-5 border-blue-500 border-b-transparent rounded-full animate-spin"></div>
            
          </div>
        </div>
  )
}

export default Loading