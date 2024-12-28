import { VictoryPie } from "victory"

//------------------------------
export const PieChart = ({ data, colors, width = 300, height = 250, innerRadius = 50, labelRadius = 90 }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <VictoryPie
        data={data}
        colorScale={colors}
        width={width}
        height={height}
        innerRadius={innerRadius}
        labelRadius={labelRadius}
        style={{
          labels: {
            fontSize: 12,
            fontWeight: 700
          },
        }}
      />
    </div>
  )
}
