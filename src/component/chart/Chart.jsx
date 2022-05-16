import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3'
import './chart.scss'
import Header from '../header/Header';



function Chart({xdim, ydim, margin, xdata, ydata}) {

    

    
    const chart = useRef(null);

    useEffect(() => {
        const svg = d3.select(chart.current)

        addAxis(svg);
        addBars(svg);
        addText(svg);
    }, [xdim, ydim, margin, xdata, ydata])

    const addAxis = (svg) => {
        
        
        const xAxis = d3.axisBottom(xscale);

        svg.append("g")
            .call(xAxis)
            .attr("transform", `translate(0, ${ydim + margin.top})`)
            .selectAll("text")
            .attr("text-anchor", "start")
            .attr("transform", `rotate(45)`)
            
        const yAxis = d3.axisLeft(yscale)

        svg.append("g")
            .call(yAxis)
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
        }

    const addBars = (svg) => {
        const linearScale = d3.scaleLinear()
        .domain([0, d3.max(ydata)])
        .range([0, ydim])

    const scaledYData = ydata.map(yval => {
        return linearScale(yval)
    })

    console.log(scaledYData)

    svg.selectAll("rect")
    .data(scaledYData)
    .enter()
    .append("rect")
    .attr("width", xscale.bandwidth())
    .attr("height", (d) => {
        return d
    })

    .attr("x", (d, i) => {
        return xscale(xdata[i])
    })

    .attr("y", (d) => {
        return margin.top + ydim -d
    })

    .attr("fill", "dodgerblue")
    .attr("stroke", "black")
    

    }


    const addText = (svg) => {
        svg.append("text")
        .text("Average Daily Temperature in Coldvilla")
        .attr("text-anchor", "middle")
        .attr("x", (margin.left + margin.right + xdim)/2)
        .attr("y", (margin.top)/2)

        svg.append("text")
            .text("Temperature in Celsius")
            .attr("x", -(margin.top + margin.bottom + ydim)/2)
            .attr("y", margin.left/4)
            .attr("transform", `rotate(-90, ${margin.left/2}, ${margin.top/2})`)
    }

        const xscale = d3.scaleBand()
            .domain(xdata)
            .range([margin.left, xdim + margin.left])
            .padding(0.1)

        const yscale = d3.scaleLinear()
            .domain([0, d3.max(ydata)])
            .range([ydim, 0])

  return (
    <div className='chart'>
        <Header/>
        <svg
            viewBox={`-45 10 ${xdim + margin.left + margin.right} ${ydim + margin.top + margin.bottom}`}
            preserveAspectRatio='xMinYMin'
            width='100%'
            height="100%"
            style={{backgroundColor: "beige"}}
            ref={chart}
        >

        </svg>

        
    </div>
  )
}

export default Chart;