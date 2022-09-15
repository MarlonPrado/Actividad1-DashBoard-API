import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";
const data = [
  { data: 45000 },
  {
    data: 50000,
  },
  {
    data: 47000,
  },
  {
    data: 44000,
  },
  {
    data: 48000,
  },
  {
    data: 53000,
  },
  {
    data: 58000,
  },
  {
    data: 60000,
  },
  {
    data: 63000,
  },
  {
    data: 65800,
  },
  {
    data: 67800,
  },
  {
    data: 66800,
  },
  {
    data: 65000,
  },
  {
    data: 63000,
  },
  {
    data: 59000,
  },
  {
    data: 57000,
  },
  {
    data: 55000,
  },
  {
    data: 53000,
  },
  {
    data: 51000,
  },
  {
    data: 50900,
  },
  {
    data: 53000,
  },
  {
    data: 58000,
  },
  {
    data: 60000,
  },
  {
    data: 63000,
  },
  {
    data: 67800,
  },
  {
    data: 65000,
  },
  {
    data: 63000,
  },
  {
    data: 65000,
  },
  {
    data: 67000,
  },
  {
    data: 70000,
  },
  {
    data: 73000,
  },
  {
    data: 75000,
  },
  {
    data: 77000,
  },
  {
    data: 80900,
  },
  {
    data: 81900,
  },
  {
    data: 79900,
  },

  {
    data: 77000,
  },
  {
    data: 75000,
  },
  {
    data: 73000,
  },
  {
    data: 70000,
  },
  {
    data: 67000,
  },
  {
    data: 65000,
  },
  {
    data: 63000,
  },
  {
    data: 65000,
  },
  {
    data: 67800,
  },
  {
    data: 63000,
  },
  {
    data: 60000,
  },
  {
    data: 58000,
  },

  {
    data: 54900,
  },
  {
    data: 60000,
  },
  {
    data: 80000,
  },
];
export default function Earnings() {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h5>La platica de este mes</h5>
          <h1>$5.460.000</h1>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#ffc107"
              fill="#121212"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.9rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;