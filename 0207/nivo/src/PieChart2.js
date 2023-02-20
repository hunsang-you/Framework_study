import { ResponsivePie } from "@nivo/pie";

const Piechart2 = () => {
  const handle = {
    padClick: (data) => {
      console.log(data);
    },

    legendClick: (data) => {
      console.log(data);
    },
  };

  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div style={{ width: "500px", height: "500px", margin: "0 auto" }}>
      <ResponsivePie
        /**
         * chart에 사용될 데이터
         */
        data={[
          [
            { id: "삼성전자", value: 55555 },
            { id: "LG에너지솔루션", value: 44444 },
            { id: "카카오뱅크", value: 22939 },
            { id: "삼성카드", value: 11119 },
            { id: "현대차", value: 40219 },
          ],
          [
            { id: "ㄱㄱㄱㄱ", value: 43321 },
            { id: "ㄴㄴㄴㄴ", value: 32111 },
            { id: "ㄷㄷㄷㄷ", value: 23121 },
            { id: "ㄹㄹㄹㄹ", value: 19222 },
            { id: "ㅁㅁㅁㅁㅁ", value: 11022 },
          ],
        ]}
        /**
         * chart margin
         */
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-90}
        endAngle={-450}
        /**
         * chart 중간 빈공간 반지름
         */
        innerRadius={0.5}
        /**
         * pad 간격
         */
        padAngle={0.7}
        /**
         * pad radius 설정 (pad별 간격이 있을 시 보임)
         */
        cornerRadius={1}
        /**
         * chart 색상
         */
        colors={["#D2143C", "#ef4444", "#f87171", "#fca5a5", "#fecaca"]} // 커스터하여 사용할 때
        // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
        /**
         * pad border 두께 설정
         */
        borderWidth={2}
        sortByValue={true}
        /**
         * link label skip할 기준 각도
         */
        arcLinkLabelsSkipAngle={0}
        /**
         * link label 색상
         */
        arcLinkLabelsTextColor="#000000"
        /**
         * link label 연결되는 선 두께
         */
        arcLinkLabelsThickness={2}
        /**
         * link label 연결되는 선 색상
         */
        arcLinkLabelsColor={{ from: "color" }} // pad 색상에 따라감
        // 라벨 표시 x
        enableArcLabels={false}
        arcLabel="id"
        /**
         * label (pad에 표현되는 글씨) skip할 기준 각도
         */
        arcLabelsSkipAngle={10}
        enableArcLinkLabels={false}
        theme={{
          /**
           * label style (pad에 표현되는 글씨)
           */
          labels: {
            text: {
              fontSize: 14,
              fill: "#000000",
            },
          },
          /**
           * legend style (default로 하단에 있는 색상별 key 표시)
           */
          //   legends: {
          //     text: {
          //       fontSize: 12,
          //       fill: "#000000",
          //     },
          //   },
        }}
        /**
         * pad 클릭 이벤트
         */
        onClick={handle.padClick}
        /**
         * legend 설정 (default로 하단에 있는 색상별 key 표시)
         */
        legends={[
          {
            anchor: "bottom", // 위치
            direction: "row", // item 그려지는 방향
            justify: false, // 글씨, 색상간 간격 justify 적용 여부
            translateX: 0, // chart와 X 간격
            translateY: -120, // chart와 Y 간격
            itemsSpacing: 0, // item간 간격
            itemWidth: 100, // item width
            itemHeight: 18, // item height
            itemDirection: "left-to-right", // item 내부에 그려지는 방향
            // itemOpacity: 1, // item opacity
            data: [{ label: "삼성전자", color: "#D2143C" }],
          },
        ]}
      />
    </div>
  );
};

export default Piechart2;
