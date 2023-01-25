// import "./styles.css";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data1 = [
  { name: "삼성전자", value: 40 },
  { name: "LG에너지솔루션", value: 30 },
  { name: "LG디스플레이", value: 25 },
  { name: "미래에셋증권", value: 20 },
  { name: "현대차", value: 10 },

];

const data2 = [
  { name: "카카오뱅크", value: 40 },
  { name: "NAVER", value: 25 },
  { name: "SK하이닉스", value: 20 },
  { name: "셀트리온", value: 20 },
  { name: "안랩", value: 10 },

];

const COLORS1 = ["#D2143C", "#ef4444", "#f87171", "#fca5a5", "#fecaca"];
const COLORS2 = ["#1e40af", "#3b82f6", "#0ea5e9", "#38bdf8", "#bae6fd"];

export default function App() {

  
  return (
    <PieChart width={800} height={800}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data1}
        cx={300}
        cy={300}
        outerRadius={200}
        innerRadius={170}
        fill="#8884d8"
        label
      >
    {data1.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
    ))}
    </Pie>
    <Pie
        dataKey="value"
        startAngle={180}
        endAngle={360}
        data={data2}
        cx={300}
        cy={300}
        outerRadius={200}
        innerRadius={170}
        fill="#8884d8"
        label
      >
    {data2.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
    ))}
    </Pie>
    </PieChart>
  );
}
