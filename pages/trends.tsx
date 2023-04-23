import { Inter } from 'next/font/google'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

const fetcher = (url: string) => fetch('https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=90')
  .then((res) => {
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  })
  .then((data) => (
    {
      chart:
      {
        result: [
          {
            timestamp: data.map((data: any[]) => data[0] / 1000), indicators: {
              quote: [
                {
                  open: data.map((data: any) => data[1]),
                  high: data.map((data: any) => data[2]),
                  low: data.map((data: any) => data[3]),
                  close: data.map((data: any) => data[4])
                }
              ]
            }
          }
        ]
      }
    }
  )
  );

export default function Home() {

  const [windowSize, setWindowSize] = useState<{ width?: number, height?: number }>({});

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { data, error } = useSWR('bitcoin-price', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const chartData: { date: string, open: string, high: string, low: string, close: string }[] = data.chart.result[0].timestamp.map((timestamp: number, index: number) => ({
    date: new Date(timestamp * 1000).toLocaleDateString(),
    open: data.chart.result[0].indicators.quote[0].open[index].toFixed(2),
    high: data.chart.result[0].indicators.quote[0].high[index].toFixed(2),
    low: data.chart.result[0].indicators.quote[0].low[index].toFixed(2),
    close: data.chart.result[0].indicators.quote[0].close[index].toFixed(2),
  }));

return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <title>BTC Prices in USD - Searching Similar Trends</title>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div className="flex flex-col justify-center w-full border-2 border-gray-300 rounded-md">
          <div className="flex justify-center">
            <LineChart width={(windowSize.width? windowSize.width: 800) / 2.5} height={(windowSize.height? windowSize.height: 400) / 2} data={chartData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Line type="monotone" dataKey="open" stroke="#8884d8" />
              <Line type="monotone" dataKey="high" stroke="#82ca9d" />
              <Line type="monotone" dataKey="low" stroke="#ffc658" />
              <Line type="monotone" dataKey="close" stroke="#ff7300" />
              <Tooltip />
              <Legend />
              <text x={windowSize.width? windowSize.width / 4: 800} y={20} textAnchor="middle" dominantBaseline="middle" fontSize="20px" fontWeight="bold">Bitcoin Price Chart</text>
            </LineChart>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full border-2 border-gray-300 rounded-md">
          <div className="flex justify-center">
            <LineChart width={(windowSize.width? windowSize.width: 800) / 2.5} height={(windowSize.height? windowSize.height: 400) / 2} data={chartData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Line type="monotone" dataKey="open" stroke="#8884d8" />
              <Line type="monotone" dataKey="high" stroke="#82ca9d" />
              <Line type="monotone" dataKey="low" stroke="#ffc658" />
              <Line type="monotone" dataKey="close" stroke="#ff7300" />
              <Tooltip />
              <Legend />
              <text x={(windowSize.width? windowSize.width: 800) / 4} y={20} textAnchor="middle" dominantBaseline="middle" fontSize="20px" fontWeight="bold">Bitcoin Price Chart</text>
            </LineChart>
          </div>
        </div>
      </div>
    </main>
  );

}
