import React from "react";
import { Box } from "@mui/material";
import Row from "../utility/Row";

interface DigitalProgressBarProps {
  percentage: number;
  color: string;
  bgColor?: string;
  height?: string;
  width?: string;
  minBarWidth?: number;
  gap?: number;
}

const DigitalProgressBar: React.FC<DigitalProgressBarProps> = ({
  bgColor="#fff",
  color,
  percentage,
  height = "48px",
  width = "100%",
  minBarWidth = 8,
  gap = 5,
}) => {
  const calculateBars = (
    containerWidth: number
  ): { totalBars: number; barWidth: number } => {
    const availableWidth = containerWidth - gap;
    const totalGapWidth =
      gap * Math.floor(availableWidth / (minBarWidth + gap));
    const widthForBars = containerWidth - totalGapWidth;

    const totalBars = Math.floor(widthForBars / minBarWidth);

    const barWidth =
      totalBars > 0
        ? (containerWidth - (totalBars - 1) * gap) / totalBars
        : minBarWidth;

    return { totalBars: Math.max(1, totalBars), barWidth };
  };

  const defaultWidth = 400;
  const { totalBars, barWidth } = calculateBars(defaultWidth);

  const filledBars = Math.round((percentage / 100) * totalBars);

  return (
    <Row
      sx={{
        width: width,
        height: height,
        display: "flex",
        alignItems: "center",
        gap: `${gap}px`,
        padding: "4px",
      }}
    >
      {Array.from({ length: totalBars }, (_, index) => (
        <Box
          key={index}
          sx={{
            width: `${barWidth}px`,
            height: "100%",
            backgroundColor: index < filledBars ? color : bgColor,
            borderRadius: "1px",
            transition: "background-color 0.3s ease",
          }}
        />
      ))}
    </Row>
  );
};


export default DigitalProgressBar;