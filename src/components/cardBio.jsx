import ProfileImage from "../assets/react.svg";

const Item = ({ name, label }) => (
  <div className="flex flex-col gap-[6px] mb-1">
    <span className="text-2xl font-bold ">{name}</span>
    <span className="text-md">{label}</span>
  </div>
);

const CardBio = () => {
  return (
    <div className="inline-flex gap-[20px] items-center rounded-lg w-[312px] h-[134px]">
      <img
        alt="Dimah-luthfi"
        src={ProfileImage}
        width={90}
        height={90}
        className="p-2 rounded-xl bg-cyan-500"
      />
      <div className="flex flex-col gap-2">
        <Item name="Nama Kamu" label="Lead Product Designer" />
      </div>
    </div>
  );
};

export default CardBio;
