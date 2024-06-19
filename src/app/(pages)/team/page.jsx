import Image from "next/image";

const Team = () => {
  return (
    <main className="">
      <h1 className="p-4 uppercase text-[10vw] xl:text-[8vw] leading-[8vw]  my-[100px] ">
        TEAM
      </h1>
      <hr className="border-[#8a6c6033] border-b-[1px]" />
      <div className=" flex flex-col xl:flex-row gap-5 xl:gap-16 py-5">
        <div className="xl:w-2/5 p-4">
          <h2 className="font-semibold mb-10">DEVELOPERS</h2>
          <div className="flex flex-col gap-10">
            <h3 className="font-semibold mb-5">PONTIAC LAND</h3>
            <div className="flex flex-col gap-5  font-semibold">
              <p>
                Pontiac Land is a privately-held property developer, owner, and
                operator based in Singapore. The Group’s collection of
                properties includes mixed-use developments with hospitality,
                commercial and residential components.
              </p>
              <p>
                Leveraging on sixty years of experience in luxury property
                development, Pontiac Land seeks to better the built environment
                through thoughtful architecture and design. Each development is
                curated with art and spaces are maintained by the Group’s
                in-house property management team to deliver hospitality to our
                guests and tenants. The collection spans Singapore, New York,
                Sydney and the Maldives.
              </p>
              <p>
                In 2006, Pontiac Land co-founded Capella Hotel Group in Asia.
                The Group subsequently acquired Capella Hotel Group as a
                wholly-owned subsidiary in 2017, extending Pontiac Land’s
                presence to over 20 destinations globally.
              </p>
            </div>
            <div className="flex flex-col ">
              <h3 className="font-semibold mb-5">HINES</h3>
              <p className="font-semibold">
                Hines is a global real estate investment manager that develops
                and operates assets. The firm was founded by Gerald D. Hines in
                1957 and now operates in 30 countries. Hines manages a $93.2B¹
                portfolio of high-performing assets across residential,
                logistics, retail, office, and mixed-use strategies. The local
                teams serve 857 properties totaling over 270 million square feet
                globally. Hines is committed to a net zero carbon target by 2040
                without buying offsets. To learn more about Hines, visit
                www.hines.com and follow @Hines on social media.
              </p>
            </div>
          </div>
          <hr className="border-[#8a6c6033] border-b-[1px] mt-12" />
          <div className="flex flex-col font-semibold">
            <h3 className="mb-5">TEAM</h3>
            <span>DOUGLAS ELLIMAN DEVELOPMENT MARKETING</span>
            <span>FIRST SERVICE RESIDENTIAL</span>
            <span>LIVUNLTD</span>
            <span>THE WRIGHT FIT</span>
          </div>
        </div>
        <div className="xl:flex-1 w-full h-[300px] md:h-[500px] xl:h-[700px] relative ">
          <Image src={"/images/team/team_1.avif"} alt="team" fill />
        </div>
      </div>
    </main>
  );
};

export default Team;
