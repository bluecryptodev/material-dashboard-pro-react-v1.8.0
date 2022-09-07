/*eslint-disable*/
import React from "react";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Heading from "components/Heading/Heading.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

export default function VectorMaps() {
  return (
    <div>
      <Heading
        textAlign="center"
        title="World Map"
        category={
          <span>
            <a
              href="https://www.npmjs.com/package/react-jvectormap?ref=creativetim"
              target="_blank"
            >
              React wrapper component
            </a>{" "}
            of jQuery{" "}
            <a
              href="http://jvectormap.com/?ref=creativetim?ref=creativetim"
              target="_blank"
            >
              jVector Map
            </a>{" "}
            pluging.
          </span>
        }
      />
      <GridContainer>
        <GridItem xs={12}>
          <Card plain>
            <CardBody plain>
              <VectorMap
                map={"world_mill"}
                backgroundColor="transparent"
                zoomOnScroll={false}
                containerStyle={{
                  width: "100%",
                  height: "420px"
                }}
                containerClassName="map"
                regionStyle={{
                  initial: {
                    fill: "#e4e4e4",
                    "fill-opacity": 0.9,
                    stroke: "none",
                    "stroke-width": 0,
                    "stroke-opacity": 0
                  }
                }}
                series={{
                  regions: [
                    {
                      values: mapData,
                      scale: ["#AAAAAA", "#444444"],
                      normalizeFunction: "polynomial"
                    }
                  ]
                }}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
