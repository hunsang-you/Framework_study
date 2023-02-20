import { render } from "react-dom";
import { ResponsivePie } from "@nivo/pie";

const PieChart3 = () => {
  const margin1 = { top: 45, right: 200, bottom: -170, left: 30 };
  const margin2 = { top: -170, right: 200, bottom: 45, left: 30 };

  const styles = {
    root: {
      fontFamily: "consolas, sans-serif",
      textAlign: "center",
      position: "relative",
      width: 600,
      height: 400,
    },
    overlay1: {
      position: "absolute",
      top: 150,
      right: margin1.right,
      bottom: -120,
      left: margin1.left,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      color: "#D2143C",
      textAlign: "center",
      // This is important to preserve the chart interactivity
      pointerEvents: "none",
    },
    overlay2: {
      position: "absolute",
      top: -200,
      right: margin2.right,
      bottom: 100,
      left: margin2.left,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      color: "#1E90FF",
      textAlign: "center",
      // This is important to preserve the chart interactivity
      pointerEvents: "none",
    },
    totalLabel: {
      fontSize: 24,
    },
  };

  const data = [
    {
      id: "000000",
      label: "삼성전자",
      value: 999999,
    },
    {
      id: "000001",
      label: "삼성카드",
      value: 877777,
    },
    {
      id: "000003",
      label: "LG전자",
      value: 555555,
    },
    {
      id: "000004",
      label: "카카오뱅크",
      value: 222222,
    },
    {
      id: "000005",
      label: "셀트리온",
      value: 411111,
    },
    {
      id: "000006",
      label: "이이이이이",
      value: 211111,
    },
  ];

  const theme = {
    background: "#FFFFFF",
    axis: {
      fontSize: "4px",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555",
        },
        text: {
          fill: "#ffffff",
        },
      },
      legend: {
        text: {
          fill: "#aaaaaa",
        },
      },
    },
    grid: {
      line: {
        stroke: "#555555",
      },
    },
  };

  //   const legends = [
  //     {
  //       anchor: "right",
  //       direction: "column",
  //       justify: false,
  //       translateX: 140,
  //       translateY: 0,
  //       itemsSpacing: 2,
  //       itemWidth: 100,
  //       itemHeight: 20,
  //       itemDirection: "left-to-right",
  //       itemOpacity: 0.85,
  //       itemTextColor: "#ffffff",
  //       symbolSize: 20,
  //       effects: [
  //         {
  //           on: "hover",
  //           style: {
  //             itemOpacity: 1,
  //           },
  //         },
  //       ],
  //     },
  //   ];

  return (
    <div>
      <div style={styles.root}>
        <ResponsivePie
          margin={margin1}
          data={data}
          innerRadius={0.7}
          enableRadialLabels={false}
          enableSlicesLabels={false}
          theme={theme}
          startAngle={-90}
          endAngle={90}
          enableArcLabels={false}
          arcLinkLabel={false}
          enableArcLinkLabels={false}
          colors={["#D2143C", "#ef4444", "#f87171", "#fca5a5", "#fecaca"]}

          // legends={legends}
        />
        <div style={styles.overlay1}>
          <p id="best-stock">최고 수익종목</p>
          <span>{data[0].label}</span>
          <span>{data[0].value}</span>
        </div>
      </div>
      <div style={styles.root}>
        <ResponsivePie
          margin={margin2}
          data={data}
          innerRadius={0.7}
          enableRadialLabels={false}
          enableSlicesLabels={false}
          theme={theme}
          startAngle={-90}
          endAngle={-270}
          enableArcLabels={false}
          arcLinkLabel={false}
          enableArcLinkLabels={false}
          colors={["#1e40af", "#3b82f6", "#0ea5e9", "#38bdf8", "#bae6fd"]}
          // legends={legends}
        />
        <div style={styles.overlay2}>
          <p>최고 손실종목</p>
          <span>{data[0].label}</span>
          <span>{data[0].value}</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart3;
