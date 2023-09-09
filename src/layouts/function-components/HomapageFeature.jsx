
const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid text-center mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {feature_list.map((item, i) => {
        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg"
          >
            <div>
              <img src={item.logo} alt=""/>
              <h3 className="h4 text-xl lg:text-2xl">{item.title}</h3>
              <p className="text-center">{item.content}</p>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
