function Footer() {
  return (
    <div className="bg-[#f6f6f4] py-10 border-t border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between px-10 gap-6">
        <div className="text-xl text-[#072f23] font-medium">
          More than 100+ companies partner
        </div>
        <div className="flex items-center gap-10 ">
          <div className="font-semibold text-gray-500">HubSpot</div>
          <div className="font-semibold text-gray-500">Dropbox</div>
          <div className="font-semibold text-gray-500">Square</div>
          <div className="font-semibold text-gray-500">Intercom</div>
          <div className="font-semibold text-gray-500">Grammarly</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
