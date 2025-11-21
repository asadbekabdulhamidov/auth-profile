import { features } from '../types/Feature.types';

function Features() {
  return (
    <section className="mt-40 mb-40">
      <div className="w-full max-w-[1232px] px-2 mx-auto flex items-center justify-between gap-4 ">
        {features.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white p-[33px] shadow-md max-w-[384px] rounded-2xl hover:scale-105 duration-300 cursor-pointer"
            >
              <img className="mb-6" src={item.icon} alt={item.title} />
              <h3 className="mb-3 leading-6 text-[#101828]">{item.title}</h3>
              <p className="text-[#4A5565] leading-6">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
