import ProfileImage from "../assets/react.svg";

const Item = ({ name, label }) => (
  <div className="flex flex-col gap-[6px] md:gap-[3px] mb-1">
    <span className="text-2xl font-bold md:text-[33px]">{name}</span>
    <span className="text-md md:text-xl md:font-semibold text-slate-400">
      {label}
    </span>
  </div>
);

const CardBio = () => {
  return (
    <div className="inline-flex gap-[25px] items-center rounded-lg w-[312px]">
      <img
        alt="Dimah-luthfi"
        src={ProfileImage}
        width={80}
        height={100}
        className="p-2 rounded-xl bg-cyan-500"
      />
      <div className="flex flex-col gap-2">
        <Item name="Nama Kamu" label="Lead Product Designer" />
      </div>
    </div>
  );
};

export default CardBio;
