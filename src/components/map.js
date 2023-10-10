function Map() {
  return (
    <div>
      <h1 className="font-bold text-4xl p-5 mt-[100px]">Google Map</h1>
      <div className="flex items-center justify-center w-full">
        <div className="mt-5 mb-14">
          <iframe
            className="  md:w-[750px] md:h-[500px]  xl:w-[900px] xl:h-[500px]"
            width="100%"
            height="600"
            title="map"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Trichy+(My%20Home)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Population Estimator map
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Map;
