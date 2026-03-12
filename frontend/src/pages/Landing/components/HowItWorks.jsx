import Step from "./Step";

export default function HowItWorks() {
  return (
    <section className="bg-gray-100 py-20 text-center">

      <h2 className="text-4xl font-bold">
        How It Works
      </h2>

      <div className="grid grid-cols-3 gap-10 px-20 mt-12">

        <Step
          title="Step 1: Ask your question"
          desc="Speak or type your query."
        />

        <Step
          title="Step 2: AI understands your need"
          desc="The assistant finds the right service."
        />

        <Step
          title="Step 3: Get clear guidance"
          desc="Receive step-by-step instructions."
        />

      </div>
    </section>
  );
}
