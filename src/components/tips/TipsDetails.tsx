import { useParams, useLoaderData } from "react-router-dom";

const TipsDetails = () => {

  const tipDetails = useLoaderData();
  const { id } = useParams();
  return (
    <div className="pt-[60px]">
      <h2>Id is: {id}</h2>
      <p>Tip{tipDetails.title}</p>
    </div>
  );
};

export default TipsDetails;

export const tipDetailsLoader = async ({ params }: any) => {
  const { id } = params;
  const res = await fetch("/data/tipsData.json");
  if (!res.ok) throw new Error("Failed to load tips data");
  const data = await res.json();
  const tip = data.tips.find((t: any) => t.id === id);
  if (!tip) throw new Error("Tip-details page not found");
  return tip;
};
