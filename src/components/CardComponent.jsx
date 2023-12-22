const CardComponent = () => {
  return (
    <div className="bg-whiteText p-4 w-full celu:w-[20rem] rounded-2xl flex flex-col gap-5">
      <div className="rounded-xl overflow-hidden hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
        <img src="images/image-qr-code.png" alt="qr-image" />
      </div>
      <div className="px-4 celu:px-3">
        <h1 className="text-darkBlue celu:text-xl font-bold text-center text-[1.6rem]">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-center text-grayishBlue text-lg celu:text-sm pt-3 pb-8 celu:pb-6">
          Scant the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
