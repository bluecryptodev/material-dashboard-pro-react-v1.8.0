import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Heading from "components/Heading/Heading.js";
import Timeline from "components/Timeline/Timeline.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import { stories } from "variables/general.js";

export default function TimelinePage() {
  return (
    <div>
      <Heading title="Timeline" textAlign="center" />
      <GridContainer>
        <GridItem xs={12}>
          <Card plain>
            <CardBody plain>
              <Timeline stories={stories} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
