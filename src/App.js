import Img1 from "./assets/images/icon-reaction.svg";
import Img2 from "./assets/images/icon-memory.svg";
import Img3 from "./assets/images/icon-verbal.svg";
import Img4 from "./assets/images/icon-visual.svg";
function App() {
  const arr = [
    { text: "Reaction", result: 80 },
    { text: "Memory", result: 92 },
    { text: "Verbal", result: 61 },
    { text: "Visual", result: 72 },
  ];
  return (
    <section className="wrapper  ">
      <div className="left-side ">
        <h4 className="text-white/80 text-center ">Your Result</h4>
        <div className="circle ">
          <p className="text-white text-3xl">76</p>
          <p className="text-white/50">of 100</p>
        </div>
        <div>
          <h3 className="text-white text-center text-2xl mb-2">Great</h3>
          <p className="text-white text-center ">
            You scored higher than 65% of the people who have taken these tests
          </p>
        </div>
      </div>
      <div className="right-side ">
        <h4 className="p-4 font-bold text-2xl">Summary</h4>
        {arr.map((e, i) => {
          return (
            <p key={i} className={`results ${e.text.toLowerCase()}`}>
              <img src={`Img${i + 1}`} alt="" />
              {e.text}
              <span className="ml-auto text-black">
                <span className="font-bold">{e.result}</span> / 100
              </span>
            </p>
          );
        })}

        <button className="text-white bg-slate-700 py-2 rounded-3xl">
          Continue
        </button>
      </div>
    </section>
  );
}

export default App;
