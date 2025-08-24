"use client"

import { useState, useEffect } from "react"
import React from "react"

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [timePeriod, setTimePeriod] = useState(10)
  const [chartData, setChartData] = useState([])
  const [hoveredPoint, setHoveredPoint] = useState(null)
  const [selectedYear, setSelectedYear] = useState(null)
  const [animationProgress, setAnimationProgress] = useState(0)

  // Calculate SIP returns
  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 100 / 12
    const totalMonths = timePeriod * 12

    // SIP formula: M * [((1 + r)^n - 1) / r] * (1 + r)
    const maturityAmount =
      monthlyInvestment * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate))

    const totalInvestment = monthlyInvestment * totalMonths
    const wealthGained = maturityAmount - totalInvestment

    return {
      maturityAmount: Math.round(maturityAmount),
      totalInvestment,
      wealthGained: Math.round(wealthGained),
    }
  }

  // Generate chart data
  useEffect(() => {
    const data = []
    const monthlyRate = expectedReturn / 100 / 12

    for (let year = 1; year <= timePeriod; year++) {
      const months = year * 12
      const maturityAmount =
        monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
      const totalInvestment = monthlyInvestment * months

      data.push({
        year,
        invested: totalInvestment,
        maturity: Math.round(maturityAmount),
        returns: Math.round(maturityAmount - totalInvestment),
      })
    }
    setChartData(data)
    setAnimationProgress(0)
    setTimeout(() => setAnimationProgress(1), 100)
  }, [monthlyInvestment, expectedReturn, timePeriod])

  const results = calculateSIP()

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const createChart = () => {
    if (chartData.length === 0) return null

    const maxValue = Math.max(...chartData.map((d) => d.maturity))
    const chartWidth = 700
    const chartHeight = 400
    const padding = 60

    const xScale = (index) => (index / (chartData.length - 1)) * (chartWidth - 2 * padding) + padding
    const yScale = (value) => chartHeight - padding - (value / maxValue) * (chartHeight - 2 * padding)

    const createSmoothPath = (data, valueKey) => {
      if (data.length < 2) return ""

      let path = `M ${xScale(0)} ${yScale(data[0][valueKey])}`

      for (let i = 1; i < data.length; i++) {
        const prevX = xScale(i - 1)
        const prevY = yScale(data[i - 1][valueKey])
        const currX = xScale(i)
        const currY = yScale(data[i][valueKey])

        const cpX = (prevX + currX) / 2
        path += ` Q ${cpX} ${prevY} ${currX} ${currY}`
      }

      return path
    }

    const investedPath = createSmoothPath(chartData, "invested")
    const maturityPath = createSmoothPath(chartData, "maturity")

    const investedAreaPath = `${investedPath} L ${xScale(chartData.length - 1)} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`

    const returnsAreaPath = `${maturityPath} L ${xScale(chartData.length - 1)} ${yScale(chartData[chartData.length - 1].invested)} ${chartData
      .slice()
      .reverse()
      .map((d, i) => `L ${xScale(chartData.length - 1 - i)} ${yScale(d.invested)}`)
      .join(" ")} Z`

    return (
      <div className="relative">
        <svg
          width="100%"
          height="400"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-lg"
          onClick={() => setSelectedYear(null)}
        >
          <defs>
            <linearGradient id="investedGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#006AFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#006AFF" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="returnsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="strongGlow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i}>
              <line
                x1={padding}
                y1={padding + (i * (chartHeight - 2 * padding)) / 5}
                x2={chartWidth - padding}
                y2={padding + (i * (chartHeight - 2 * padding)) / 5}
                stroke="#E0E7FF"
                strokeWidth="1"
                strokeDasharray="2,4"
              />
            </g>
          ))}

          {chartData.map((d, i) => (
            <g key={i}>
              <line
                x1={xScale(i)}
                y1={padding}
                x2={xScale(i)}
                y2={chartHeight - padding}
                stroke={selectedYear === d.year ? "#006AFF" : "#F0F4FF"}
                strokeWidth={selectedYear === d.year ? "2" : "1"}
                strokeDasharray="2,4"
                className="transition-all duration-300"
              />
              <rect
                x={xScale(i) - 15}
                y={padding}
                width="30"
                height={chartHeight - 2 * padding}
                fill="transparent"
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedYear(selectedYear === d.year ? null : d.year)
                }}
              />
            </g>
          ))}

          {[0, 1, 2, 3, 4, 5].map((i) => {
            const value = maxValue - (i * maxValue) / 5
            return (
              <text
                key={i}
                x={padding - 15}
                y={padding + (i * (chartHeight - 2 * padding)) / 5 + 5}
                fill="#4F46E5"
                fontSize="11"
                fontWeight="500"
                textAnchor="end"
              >
                ₹{value >= 1000000 ? `${(value / 1000000).toFixed(1)}M` : `${(value / 100000).toFixed(0)}L`}
              </text>
            )
          })}

          {chartData.map((d, i) => (
            <text
              key={i}
              x={xScale(i)}
              y={chartHeight - padding + 25}
              fill={selectedYear === d.year ? "#006AFF" : "#4F46E5"}
              fontSize="11"
              fontWeight={selectedYear === d.year ? "700" : "500"}
              textAnchor="middle"
              className="transition-all duration-300"
            >
              Year {d.year}
            </text>
          ))}

          <path
            d={investedAreaPath}
            fill="url(#investedGradient)"
            className="transition-all duration-500"
            style={{
              transform: `scaleY(${animationProgress})`,
              transformOrigin: `center ${chartHeight - padding}px`,
            }}
          />
          <path
            d={returnsAreaPath}
            fill="url(#returnsGradient)"
            className="transition-all duration-700"
            style={{
              transform: `scaleY(${animationProgress})`,
              transformOrigin: `center ${chartHeight - padding}px`,
            }}
          />

          <path
            d={investedPath}
            stroke="#006AFF"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            className="transition-all duration-300"
            style={{
              strokeDasharray: investedPath.length,
              strokeDashoffset: investedPath.length * (1 - animationProgress),
            }}
          />
          <path
            d={maturityPath}
            stroke="#00D4FF"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            className="transition-all duration-500"
            style={{
              strokeDasharray: maturityPath.length,
              strokeDashoffset: maturityPath.length * (1 - animationProgress),
            }}
          />

          {chartData.map((d, i) => (
            <g key={i}>
              {selectedYear === d.year && (
                <>
                  <circle
                    cx={xScale(i)}
                    cy={yScale(d.invested)}
                    r="15"
                    fill="#006AFF"
                    opacity="0.2"
                    className="animate-pulse"
                  />
                  <circle
                    cx={xScale(i)}
                    cy={yScale(d.maturity)}
                    r="15"
                    fill="#00D4FF"
                    opacity="0.2"
                    className="animate-pulse"
                  />
                </>
              )}

              <circle
                cx={xScale(i)}
                cy={yScale(d.invested)}
                r={selectedYear === d.year ? "10" : hoveredPoint === `invested-${i}` ? "8" : "5"}
                fill="#006AFF"
                stroke="white"
                strokeWidth="3"
                filter={selectedYear === d.year ? "url(#strongGlow)" : "url(#glow)"}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredPoint(`invested-${i}`)}
                onMouseLeave={() => setHoveredPoint(null)}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedYear(selectedYear === d.year ? null : d.year)
                }}
              />

              <circle
                cx={xScale(i)}
                cy={yScale(d.maturity)}
                r={selectedYear === d.year ? "10" : hoveredPoint === `maturity-${i}` ? "8" : "5"}
                fill="#00D4FF"
                stroke="white"
                strokeWidth="3"
                filter={selectedYear === d.year ? "url(#strongGlow)" : "url(#glow)"}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredPoint(`maturity-${i}`)}
                onMouseLeave={() => setHoveredPoint(null)}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedYear(selectedYear === d.year ? null : d.year)
                }}
              />

              {(hoveredPoint === `invested-${i}` || selectedYear === d.year) && (
                <g>
                  <rect
                    x={xScale(i) - 80}
                    y={yScale(d.invested) - 60}
                    width="160"
                    height="50"
                    fill="#1c1c1c"
                    rx="8"
                    opacity="0.95"
                    filter="url(#glow)"
                  />
                  <text
                    x={xScale(i)}
                    y={yScale(d.invested) - 35}
                    fill="white"
                    fontSize="11"
                    textAnchor="middle"
                    fontWeight="600"
                  >
                    Year {d.year} - Invested
                  </text>
                  <text
                    x={xScale(i)}
                    y={yScale(d.invested) - 20}
                    fill="#00D4FF"
                    fontSize="13"
                    textAnchor="middle"
                    fontWeight="700"
                  >
                    {formatCurrency(d.invested)}
                  </text>
                </g>
              )}

              {(hoveredPoint === `maturity-${i}` || selectedYear === d.year) && (
                <g>
                  <rect
                    x={xScale(i) - 80}
                    y={yScale(d.maturity) - 80}
                    width="160"
                    height="70"
                    fill="#1c1c1c"
                    rx="8"
                    opacity="0.95"
                    filter="url(#glow)"
                  />
                  <text
                    x={xScale(i)}
                    y={yScale(d.maturity) - 55}
                    fill="white"
                    fontSize="11"
                    textAnchor="middle"
                    fontWeight="600"
                  >
                    Year {d.year} - Total Value
                  </text>
                  <text
                    x={xScale(i)}
                    y={yScale(d.maturity) - 40}
                    fill="#00D4FF"
                    fontSize="13"
                    textAnchor="middle"
                    fontWeight="700"
                  >
                    {formatCurrency(d.maturity)}
                  </text>
                  <text
                    x={xScale(i)}
                    y={yScale(d.maturity) - 25}
                    fill="#00FF88"
                    fontSize="11"
                    textAnchor="middle"
                    fontWeight="500"
                  >
                    Returns: {formatCurrency(d.returns)}
                  </text>
                  <text
                    x={xScale(i)}
                    y={yScale(d.maturity) - 12}
                    fill="#FFD700"
                    fontSize="10"
                    textAnchor="middle"
                    fontWeight="500"
                  >
                    Growth: {((d.returns / d.invested) * 100).toFixed(1)}%
                  </text>
                </g>
              )}
            </g>
          ))}

          <text x={chartWidth / 2} y={30} fill="#1c1c1c" fontSize="16" fontWeight="600" textAnchor="middle">
            SIP Growth Projection Over Time
          </text>

          <text x={chartWidth / 2} y={chartHeight - 10} fill="#666" fontSize="10" textAnchor="middle" opacity="0.7">
            Click on data points or years to highlight • Hover for detailed information
          </text>
        </svg>

        {selectedYear && (
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-[#1c1c1c] mb-2">Year {selectedYear} Details</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {chartData
                .filter((d) => d.year === selectedYear)
                .map((d) => (
                  <React.Fragment key={d.year}>
                    <div>
                      <span className="text-gray-600">Invested:</span>
                      <div className="font-semibold text-[#006AFF]">{formatCurrency(d.invested)}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Returns:</span>
                      <div className="font-semibold text-[#00D4FF]">{formatCurrency(d.returns)}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Value:</span>
                      <div className="font-semibold text-[#1c1c1c]">{formatCurrency(d.maturity)}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Growth:</span>
                      <div className="font-semibold text-green-600">{((d.returns / d.invested) * 100).toFixed(1)}%</div>
                    </div>
                  </React.Fragment>
                ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 pt-20 md:p-8 lg:pt-20 sm:pt-20 lg:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1c1c1c] mb-2">SIP Calculator</h1>
          <p className="text-gray-600">Calculate your Systematic Investment Plan returns</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#1c1c1c] mb-2">Investment Details</h2>
              <p className="text-gray-600">Enter your SIP investment parameters</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="monthly-investment" className="block text-[#1c1c1c] font-medium">
                  Monthly Investment Amount
                </label>
                <input
                  id="monthly-investment"
                  type="number"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#006AFF] focus:border-[#006AFF]"
                />
                <p className="text-sm text-gray-500">Amount you invest every month</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="expected-return" className="block text-[#1c1c1c] font-medium">
                  Expected Annual Return (%)
                </label>
                <input
                  id="expected-return"
                  type="number"
                  step="0.1"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#006AFF] focus:border-[#006AFF]"
                />
                <p className="text-sm text-gray-500">Expected yearly returns from your investment</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="time-period" className="block text-[#1c1c1c] font-medium">
                  Investment Period (Years)
                </label>
                <input
                  id="time-period"
                  type="number"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#006AFF] focus:border-[#006AFF]"
                />
                <p className="text-sm text-gray-500">Duration of your SIP investment</p>
              </div>

              <div className="mt-8 p-6 bg-[#006AFF] rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Investment Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Total Investment:</span>
                    <span className="text-white font-semibold">{formatCurrency(results.totalInvestment)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Wealth Gained:</span>
                    <span className="text-white font-semibold">{formatCurrency(results.wealthGained)}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-blue-300 pt-4">
                    <span className="text-blue-100">Maturity Amount:</span>
                    <span className="text-white font-bold text-xl">{formatCurrency(results.maturityAmount)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#1c1c1c] mb-2">Growth Projection</h2>
              <p className="text-gray-600">Interactive year-wise investment growth visualization</p>
            </div>

            <div className="mb-4">{createChart()}</div>

            <div className="flex justify-center gap-8 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-[#006AFF] rounded-full shadow-sm"></div>
                <span className="text-sm font-medium text-gray-700">Total Invested</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-[#00D4FF] rounded-full shadow-sm"></div>
                <span className="text-sm font-medium text-gray-700">Total Returns</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-[#1c1c1c] mb-2">
              {((results.wealthGained / results.totalInvestment) * 100).toFixed(1)}%
            </div>
            <div className="text-gray-600">Total Return</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-[#1c1c1c] mb-2">
              {formatCurrency(results.maturityAmount / (timePeriod * 12))}
            </div>
            <div className="text-gray-600">Average Monthly Return</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-[#1c1c1c] mb-2">
              {(results.wealthGained / results.totalInvestment).toFixed(2)}x
            </div>
            <div className="text-gray-600">Wealth Multiplier</div>
          </div>
        </div>
      </div>
    </div>
  )
}
