import * as React from "react";
import { useEffect, useRef } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  AnnotationsDirective,
  AnnotationDirective,
  ChartAnnotation,
  Legend,
  Category,
  SplineSeries,
  Tooltip,
  Highlight,
  RangenavigatorSeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";
import { Browser, registerLicense } from "@syncfusion/ej2-base";
import { get24hCast, getDayName, getLatandLon, time2digit } from "../../lib";
import { useQuery } from "react-query";
import SkeletonLoading from "./SkeletonLoading";

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    #charts_Series_0_Point_2_Symbol {
        -webkit-animation: opac 1s ease-out infinite;
        animation: opac 1s ease-out infinite;
    }

    #charts_Series_2_Point_0_Symbol {
        -webkit-animation: opac 1s ease-out infinite;
        animation: opac 1s ease-in-out infinite;
    }

    @keyframes opac {
        0% {
            stroke-opacity: 1;
            stroke-width: 0px;
        }
        100% {
            stroke-opacity: 0;
            stroke-width: 10px;
        }
    }`;

const icons = {
  //  Thunderstorm
  Thunderstorm:
    "https://res.cloudinary.com/dik65evmf/image/upload/v1713558827/widgetUpload/lwl1ockhbxzw46cubiie.svg",
  //  partly rainy
  partlyRainy: `https://res.cloudinary.com/dik65evmf/image/upload/v1713558714/widgetUpload/rpsg8q10sdx7vcchozaq.svg`,
  //  Rain
  Rain: `	https://res.cloudinary.com/dik65evmf/image/upload/v1713558795/widgetUpload/amg8j1hi8wjzyiiujb0i.svg  `,
  // clear sky
  clearSky: `https://res.cloudinary.com/dik65evmf/image/upload/v1713558668/widgetUpload/wljrgbbdr6vva52m8vo3.svg`,
  //sunny:
  Sunny: `https://res.cloudinary.com/dik65evmf/image/upload/v1713558757/widgetUpload/xks89f8i8cgxyvhshdly.svg`,
  Snow: `https://res.cloudinary.com/dik65evmf/image/upload/v1713559151/widgetUpload/lfnksxjhcydozngq0yzr.png`,
};

async function handle24HourData() {
  const { lat, lon } = await getLatandLon();

  const weatherData = await get24hCast(lat, lon);

  console.log(weatherData);

  return weatherData;
}

const Spline = () => {
  registerLicense(
    "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCe0x3THxbf1x0ZFZMYl5bR3NPIiBoS35RckVnWHZfdXZXRWZdUkx/"
  );
  const {
    data: weatherData,
    isLoading,
    error,
  } = useQuery("24cast", handle24HourData);

  let chartInstance = useRef(null);

  if (!weatherData) {
    return (
      <div className="w-full">
        <SkeletonLoading className="bg-gray-300 h-[100px] rounded-md" />
        <SkeletonLoading className="bg-gray-300 h-[20px] my-[0.5em] rounded-md" />
        <SkeletonLoading className="bg-gray-300 max-w-[60%] h-[20px] my-[0.5em] rounded-md" />
        <SkeletonLoading className="bg-gray-300 max-w-[30%] h-[20px] my-[0.5em] rounded-md" />
      </div>
    );
  }

  const data1 = weatherData.map((item) => {
    return { x: time2digit(item.dt), y: Math.ceil(item.main.temp_max) };
  });

  const annotationDataCeil = weatherData.map((item) => {
    return {
      content: `<div id="ceil-temp" style="font-weight:800; font-size:17px">${Math.ceil(
        item.main.temp_max
      )}°</div>`,
      x: time2digit(item.dt), // Assuming time2digit is a valid function
      y: Math.ceil(item.main.temp_max) + 2,
      coordinateUnits: "Point",
      verticalAlignment: "Top",
    };
  });

  const annotationDataIcons = weatherData.map((item) => {
    let src;
    if (item.weather.id === 800) {
      src = icons.Sunny;
    }
    if (item.weather.id >= 200 && item.weather.id <= 232) {
      src = icons.Thunderstorm;
    }
    if (item.weather.id >= 300 && item.weather.id <= 321) {
      src = icons.partlyRainy;
    }
    if (item.weather.id >= 500 && item.weather.id <= 531) {
      src = icons.Rain;
    }
    if (item.weather.id >= 600 && item.weather.id <= 622) {
      src = icons.Snow;
    } else {
      src = icons.clearSky;
    }

    return {
      content: `<div id="chart_cloud"><img src=${src} style="width: 41px; height: 41px"/></div>`,
      x: time2digit(item.dt), // Assuming time2digit is a valid function
      y: Math.ceil(item.main.temp_max) - 13,
      coordinateUnits: "Point",
      verticalAlignment: "Top",
    };
  });

  const onChartLoad = (args) => {
    let chart = document.getElementById("charts");
    chart.setAttribute("title", "");
  };
  const load = (args) => {
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.chart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, "Dark")
      .replace(/contrast/i, "Contrast");
  };

  return (
    <div className="control-pane w-full">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section w-full">
        <ChartComponent
          id="charts"
          width={"100%"}
          height="200px" // Set the height as a specific value
          style={{ textAlign: "center", padding: 0}}
          ref={chartInstance}
          primaryXAxis={{
            valueType: "Category",
            interval: 1,
            visible: false,
            majorGridLines: { width: 0 },
            labelIntersectAction: "Rotate90",
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          legendSettings={{ enableHighlight: true }}
          chartArea={{ border: { width: 0 } }}
          load={load.bind(this)}
          primaryYAxis={{
            labelFormat: "{value}°C",
            visible: false,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          loaded={onChartLoad.bind(this)}
        >
          <Inject
            services={[
              SplineSeries,
              Legend,
              Category,
              Tooltip,
              ChartAnnotation,
              Highlight,
            ]}
          />
          {/* <AnnotationDirective
              content='<div id="chart_cloud" style="font-weight:800">25</div>'
              x="Sun"
              y={data1[0].y - 10}
              coordinateUnits="Point"
              verticalAlignment="Top"
            />
            <AnnotationDirective
              content='<div id="chart_cloud"><img src="src/chart/images/sunny.png"   style="width: 41px; height: 41px"/></div>'
              x="Tue"
              y={33}
              coordinateUnits="Point"
              verticalAlignment="Top"
            /> */}
          <AnnotationsDirective>
            {annotationDataCeil.map((annotation, index) => (
              <AnnotationDirective
                key={index}
                content={annotation.content}
                x={annotation.x}
                y={annotation.y}
                coordinateUnits={annotation.coordinateUnits}
                verticalAlignment={annotation.verticalAlignment}
              />
            ))}
            {annotationDataIcons.map((annotation, index) => (
              <AnnotationDirective
                key={index}
                content={annotation.content}
                x={annotation.x}
                y={annotation.y}
                coordinateUnits={annotation.coordinateUnits}
                verticalAlignment={annotation.verticalAlignment}
              />
            ))}
          </AnnotationsDirective>
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data1}
              xName="x"
              yName="y"
              width={2}
              name="Max Temp"
              type="Spline"
              marker={{
                visible: true,
                width: 10,
                height: 10,
                fill: "#000000",
                border: { width: 0 },
              }} // Set border width to 0
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
export default Spline;
