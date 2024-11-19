""

import Image from 'next/image';

const SignUpSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-green-200 max-md:hidden mt-20 bg-cover bg-center" id='Subs' style={{ backgroundImage: "url('/Subscrever/Subs.png')" }}>
     
      {/* Card de Inscrição */}
      <div className="relative z-10 bg-green-500 p-8 rounded-lg max-w-md text-white shadow-lg mb-96 ">
        <h4 className="text-sm font-semibold">Subscriber</h4>
        <h2 className="text-2xl font-bold mt-2">Sign up as our partner and start selling</h2>
        <p className="mt-4 text-sm">
          Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.
        </p>
        <button className="mt-6 bg-white text-green-600 font-semibold py-2 px-4 rounded hover:bg-green-100">
          become a partner &rarr;
        </button>
      </div>
    </section>
  );
};

export default SignUpSection;
