function Education({ education }) {
  return (
    <div ref={education} id="education">
      <p className="font-bold text-4xl p-5 mt-[100px]">Education</p>
      <div className="w-[50%] shadow-2xl p-5 rounded-xl">
        <h2 className="font-medium text-sm p-5">SSLC</h2>
        <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
          ST. Philominal Hr. Sec.School-SSLC Kulumur-621804
        </p>
        <h1 className="text-gray-500 leading-[25px] ml-5 text-sm font-semibold">
          Completed SSLC with 83.6% in 2016-2017
        </h1>
      </div>
      <br />
      <div className="flex justify-end mr-5">
        <div className="w-[50%] shadow-2xl p-5 rounded-xl">
          <h2 className="font-medium text-sm p-5">HSC</h2>
          <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
            Raja Vignesh Hr. Sec.School-HSC Melamathur-621713
          </p>
          <h1 className="text-gray-500 leading-[25px] ml-5 text-sm font-semibold">
            Completed HSC (Biology math group) with 63.16% in 2018-2019
          </h1>
        </div>
      </div>
      <br />
      <div className="w-[50%] shadow-2xl p-5 rounded-xl">
        <h2 className="font-medium  text-sm p-5">UNDERGRADUATE(UG) B.E-ECE</h2>
        <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
          University College Of Engineering Tindivanam-604001
        </p>
        <h1 className="text-gray-500 leading-[25px] ml-5 text-sm font-semibold">
          Graduated in the year 2023 with an Aggregate CGPA of 7.56.
        </h1>
      </div>
    </div>
  );
}

export default Education;
