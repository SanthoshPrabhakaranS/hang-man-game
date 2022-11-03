import "../index.css"

const HEAD = (
  <div className="face" />
)

const BODY = (
  <div className="body" />
)

const RIGHT_ARM = (
  <div className="right-arm" />
)

const LEFT_ARM = (
  <div className="left-arm" />
)

const RIGHT_LEG = (
  <div className="right-leg" />
)

const LEFT_LEG = (
  <div className="left-leg" />
)

const BODY_PARTS = [ HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG ]

type HangmanDrawingProps = {  
  numberOfGuesses: number
}

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
  return <div className="drawing-wrapper">
    {BODY_PARTS.slice(0, numberOfGuesses)}
    <div className="top-right"></div>
    <div className="top"></div>
    <div className="middle"></div>
    <div className="bottom"></div>
  </div>;
};

export default HangmanDrawing;
