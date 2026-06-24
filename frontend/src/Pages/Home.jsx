import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Navbar */}
     <nav className="sticky top-0 z-50 bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">

        <h1 className="text-2xl font-bold">
          MindCare
        </h1>

        <div className="flex gap-6 items-center">

  <a href="#about">About</a>

  <a href="#features">Features</a>

  <a href="#therapists">Therapists</a>

  <a href="#contact">Contact</a>

  <Link to="/login">
    Login
  </Link>

  <Link to="/signup">
    Signup
  </Link>

</div>

      </nav>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white text-center py-32">

        <h1 className="text-6xl font-bold">
          Mental Health Platform
        </h1>

        <p className="mt-5 text-xl">
          Find the perfect therapist for your needs
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <Link
            to="/signup"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold"
          >
            Get Started
          </Link>

          <a
            href="#therapists"
            className="border border-white px-6 py-3 rounded-lg"
          >
            Find Therapist
          </a>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-10 bg-gray-100"
      >

        <h2 className="text-4xl font-bold text-center mb-8">
          About Us
        </h2>

        <p className="text-center max-w-4xl mx-auto text-lg text-gray-600">
          Our Mental Health Platform helps clients connect
          with qualified therapists based on their mental
          health assessments, preferences, and therapy goals.
          We aim to make mental healthcare accessible,
          personalized, and secure.
        </p>

      </section>

      {/* Features */}
      <section
        id="features"
        className="py-20 px-10"
      >

        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-3">
              Mental Assessment
            </h3>

            <p className="text-gray-600">
              Evaluate mental wellness through structured assessment forms.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-3">
              Therapist Matching
            </h3>

            <p className="text-gray-600">
              Get therapist recommendations based on assessment scores.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-3">
              Secure Platform
            </h3>

            <p className="text-gray-600">
              User data is protected using privacy and security measures.
            </p>
          </div>

        </div>

      </section>

      <section className="py-20 bg-blue-700 text-white">

  <div className="grid md:grid-cols-4 text-center">

    <div>
      <h1 className="text-5xl font-bold">
        500+
      </h1>

      <p>Clients</p>
    </div>

    <div>
      <h1 className="text-5xl font-bold">
        120+
      </h1>

      <p>Therapists</p>
    </div>

    <div>
      <h1 className="text-5xl font-bold">
        1000+
      </h1>

      <p>Sessions</p>
    </div>

    <div>
      <h1 className="text-5xl font-bold">
        98%
      </h1>

      <p>Success Rate</p>
    </div>

  </div>

</section>

      {/* Therapists */}
      <section
        id="therapists"
        className="py-20 px-10 bg-gray-100"
      >

        <h2 className="text-4xl font-bold text-center mb-10">
          Top Therapists
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold">
              Dr. Priya Sharma
            </h3>

            <p>Anxiety Specialist</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              View Profile
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold">
              Dr. Aman Gupta
            </h3>

            <p>Depression Expert</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              View Profile
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold">
              Dr. Sarah Khan
            </h3>

            <p>Stress Management</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              View Profile
            </button>
          </div>

        </div>

      </section>

{/* Testimonials */}

<section className="py-20 px-10 bg-gray-100">

  <h2 className="text-4xl font-bold text-center mb-10">
    What Our Users Say
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white p-6 rounded-xl shadow">
      <p>
        "This platform helped me find the perfect
        therapist within minutes."
      </p>

      <h3 className="font-bold mt-4">
        Rahul Sharma
      </h3>
    </div>

    <div className="bg-white p-6 rounded-xl shadow">
      <p>
        "The assessment process was simple and
        recommendations were accurate."
      </p>

      <h3 className="font-bold mt-4">
        Anjali Gupta
      </h3>
    </div>

    <div className="bg-white p-6 rounded-xl shadow">
      <p>
        "Very easy to use and secure."
      </p>

      <h3 className="font-bold mt-4">
        Vikash Singh
      </h3>
    </div>

  </div>

</section>
{/* FAQ */}

<section className="py-20 px-10">

  <h2 className="text-4xl font-bold text-center mb-10">
    Frequently Asked Questions
  </h2>

  <div className="max-w-4xl mx-auto space-y-5">

    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-bold">
        How are therapists recommended?
      </h3>

      <p className="mt-2 text-gray-600">
        Recommendations are generated using
        assessment scores and therapist expertise.
      </p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-bold">
        Is my data secure?
      </h3>

      <p className="mt-2 text-gray-600">
        Yes, all information is securely stored.
      </p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-bold">
        Can I change therapists later?
      </h3>

      <p className="mt-2 text-gray-600">
        Yes, clients can switch therapists anytime.
      </p>
    </div>

  </div>

</section>
      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-10"
      >

        <h2 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <div className="max-w-xl mx-auto">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 mb-3 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 mb-3 rounded"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border p-3 mb-3 rounded"
          ></textarea>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Send Message
          </button>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6">

        <p>
          © 2026 Mental Health Platform. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;