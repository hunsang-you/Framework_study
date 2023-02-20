import { PieChart, Pie, Cell } from "recharts";
import "./App.css";

const PieChart4 = () => {
  const data01 = [
    {
      name: "삼성전자",
      value: 55555,
    },
    {
      name: "삼성카드",
      value: 44444,
    },
    {
      name: "SK하이닉스",
      value: 33333,
    },
    {
      name: "LG전자",
      value: 22222,
    },
    {
      name: "현대차",
      value: 11111,
    },
  ];
  const data02 = [
    {
      name: "카카오뱅크",
      value: 44444,
    },
    {
      name: "룰루",
      value: 33333,
    },
    {
      name: "랄라",
      value: 22222,
    },
    {
      name: "이제그만",
      value: 18283,
    },
    {
      name: "그만",
      value: 11111,
    },
  ];
  const colors1 = ["#D2143C", "#ef4444", "#f87171", "#fca5a5", "#fecaca"];
  const colors2 = ["#1e40af", "#3b82f6", "#0ea5e9", "#38bdf8", "#bae6fd"];
  return (
    <div className="Chart4">
      <div>
        <PieChart width={700} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={130}
            fill="#8884d8"
            startAngle={180}
            endAngle={0}
            label
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors1[index]} />
            ))}
          </Pie>
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={130}
            fill="#82ca9d"
            startAngle={-180}
            endAngle={0}
          >
            {data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors2[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default PieChart4;
