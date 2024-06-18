import Section from "../../../../components/Section";

const section = {
  title: "MAJESTIC LIVING",
  button: "SEE AL PENTHOUSE FEATURES",
  text: "The architecture of the tower's upper floors creates entirely unique interior spaces, while the addition of bespoke artistic elements to the penthouse residences—such as dramatic double-height great rooms, monumental limestone-clad fireplaces, or private interior elevators—makes each one truly original.",
  images: [
    "/images/penthouse/penthouse_09.avif",
    "/images/penthouse/penthouse_07.avif",
    "/images/penthouse/penthouse_08.avif",
  ],
};

const Third = () => {
  return (
    <section>
      <Section section={section} />
    </section>
  );
};

export default Third;
