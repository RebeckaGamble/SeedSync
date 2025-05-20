import TipsContent from "@/components/tips/TipsContent";

const Tips = () => {
  return (
    <section className="pt-[60px] bg-primary">
      <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0 pt-10 md:pt-16 pb-16 text-primary-foreground">
        <TipsContent />

        {/* <div className="flex pt-10 flex-wrap space-x-10 space-y-6">
        {tipsData.map((tip:any) => {
          return (
            <Link key={tip.id} to={`/tips/${tip.id}`} >
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </Link>
          )
        })}
        </div> */}
      </div>
    </section>
  );
};

export default Tips;
