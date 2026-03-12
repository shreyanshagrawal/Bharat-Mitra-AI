import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="py-20 px-20 text-center">

      <h2 className="text-4xl font-bold">
        Empowering Citizens with AI
      </h2>

      <p className="text-gray-600 mt-3">
        Access government services effortlessly.
      </p>

      <div className="grid grid-cols-3 gap-10 mt-12">

        <FeatureCard
          title="Find Government Schemes"
          desc="Discover schemes you qualify for instantly."
        />

        <FeatureCard
          title="Report Civic Issues"
          desc="Report potholes, water supply issues etc."
        />

        <FeatureCard
          title="Know Your Rights"
          desc="Understand your legal rights easily."
        />

      </div>
    </section>
  );
}
