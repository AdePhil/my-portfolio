const Box = ({ bg, ...rest }) => {
  return (
    <div className="box" style={{ backgroundColor: bg }} {...rest}>
      <style jsx>
        {`
          .box {
            height: 100vh;
            position: absolute;
            cursor: pointer;
            top: 0;
            bottom: 0;
            width: 100%;
          }

          #box1 {
            bottom: 135px;
            z-index: 5;
            height: calc(100vh - 135px);
          }
          #box2 {
            bottom: 90px;
            z-index: 4;
            height: calc(100vh - 90px);
          }
          #box3 {
            bottom: 45px;
            z-index: 3;
            height: calc(100vh - 45px);
          }
        `}
      </style>
    </div>
  );
};

export default Box;
