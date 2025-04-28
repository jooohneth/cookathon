const info: string[] = [
  "> Mantle Network's flagship early-stage builder program",
  "> Monthly [May–Oct, 2025]",
  "> Virtual",
  "> $15K rewards per cook + partner prizes",
];

const rewards: string[] = [
  "> $10K bounties (1st: $5K; 2nd: $3K; 3rd: $2K)",
  "> $5K prize pool for phase 3 qualifiers",
  "> Builder Score XP for all",
  "> Winners get priority consideration for further development (grants, accelerators etc.)",
];

const Details = () => {
  return (
    <div className="w-full mt-16 flex md:flex-row md:justify-between md:items-start gap-16">
      <div className="flex-1 flex flex-col gap-4">
        <div className="text-3xl font-bold uppercase">Info</div>
        <ul>
          {info.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="text-3xl font-bold uppercase">Rewards + Prizes</div>
        <ul>
          {rewards.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
