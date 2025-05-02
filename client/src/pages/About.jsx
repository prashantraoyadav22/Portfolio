function About() {
    return (
        <div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-black bg-cover bg-center"
      style={{
        backgroundImage: "url('../../public/image/bg.jpg')", // Ensure this image exists in your public/images directory
      }}
    >
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-center max-w-2xl">
                Coming Soon! This page is under construction. Stay tuned for updates.
            </p>
        </div>
    );
}
export default About;