export default function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      <div className="relative w-10 h-10 transform rotate-[165deg]">
        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-lg animate-before absolute-center"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-lg animate-after absolute-center"></div>
      </div>

      <style jsx>{`
        @keyframes before {
          0% {
            width: 0.5em;
            box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
              -1em 0.5em rgba(111, 202, 220, 0.75);
          }
          35% {
            width: 2.5em;
            box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75),
              0 0.5em rgba(111, 202, 220, 0.75);
          }
          70% {
            width: 0.5em;
            box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75),
              1em 0.5em rgba(111, 202, 220, 0.75);
          }
          100% {
            box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
              -1em 0.5em rgba(111, 202, 220, 0.75);
          }
        }

        @keyframes after {
          0% {
            height: 0.5em;
            box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
              -0.5em -1em rgba(233, 169, 32, 0.75);
          }
          35% {
            height: 2.5em;
            box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75),
              -0.5em 0 rgba(233, 169, 32, 0.75);
          }
          70% {
            height: 0.5em;
            box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75),
              -0.5em 1em rgba(233, 169, 32, 0.75);
          }
          100% {
            box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
              -0.5em -1em rgba(233, 169, 32, 0.75);
          }
        }

        .animate-before {
          animation: before 2s infinite;
        }

        .animate-after {
          animation: after 2s infinite;
        }

        .absolute-center {
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
}
