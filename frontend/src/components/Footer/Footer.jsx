export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-20 py-16">

      <div className="grid grid-cols-4 gap-10">

        <div>
          <h3 className="text-xl font-bold mb-4">
            Bharat Mitra AI
          </h3>
          <p className="text-gray-300">
            Your personal civic assistant connecting citizens with government services.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Platform</h4>
          <p>About</p>
          <p>Government Schemes</p>
          <p>Civic Reporting</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <p>Contact</p>
          <p>FAQ</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>

      </div>

      <p className="text-center mt-10 text-gray-400">
        © 2024 Bharat Mitra AI
      </p>

    </footer>
  );
}
