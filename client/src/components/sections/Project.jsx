const Project = () => {
    return(
        <div  className="flex flex-col items-center justify-center min-h-screen">
            
            
            
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-screen-lg">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Project 1</h3>
                    <p className="text-gray-400">Description of Project 1.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">

                    <h3 className="text-xl font-semibold mb-4">Project 2</h3>
                    <p className="text-gray-400">Description of Project 2.</p>
                </div>
                {/* Add more projects as needed */}
            </div>
        </div>
    )
}
export default Project;