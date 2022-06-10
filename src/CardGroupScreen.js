import React from 'react'
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import allData from './data/AllData'

function CardGroupScreen() {
  return (
    <>
    {allData.map((data,i) => (
        <CardGroup key={i}>
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              {data.title}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {data.date}
            </CardSubtitle>
            <CardText>
              {data.rollNumer}
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>

      </CardGroup>
    ))}
    </>
  )
}

export default CardGroupScreen