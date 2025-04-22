const CertificateCard = ({ title, platform, issuedDate }) => {
    return (
      <div className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg text-white w-full md:w-80">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm">{platform}</p>
        <p className="text-xs text-gray-300">{issuedDate}</p>
      </div>
    );
  };
  
  export default CertificateCard;
  