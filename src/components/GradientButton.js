"use client";

export default function GradientButton() {
  return (
    <>
      <button
        type="button"
        className="text-white bg-gradient-animation font-medium rounded-lg text-sm px-10 py-3 shadow-lg monument-heading"
      >
        Book a Consultation
      </button>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .bg-gradient-animation {
          background: linear-gradient(
            45deg,
            #ff7eb3,
            #fc5b76,
            #c0a062,
            #ff814c
          );
          background-size: 300% 300%;
          animation: gradientShift 3s ease infinite;
        }
      `}</style>
    </>
  );
}
