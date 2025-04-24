const TechStack = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
            <div className="grid grid-cols-2 gap-4 max-w-4xl">
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>React</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Backend</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Tools & Technologies</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>Git</li>
                        <li>Docker</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default TechStack;