const BlogCard = ({ title, summary, date }) => {
    return (
      <div className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg text-white w-full md:w-80">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-2">{summary}</p>
        <p className="text-xs text-gray-300">{date}</p>
      </div>
    );
  };
  
  export default BlogCard;
  