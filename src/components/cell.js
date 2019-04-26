import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  aligh-items: center;
  height: 100%;
`

const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 10px;
  background-image: url(${(props) => props.image});
  background-size: 60px;
  background-repeat: no-repeat;
  margin: auto 0;
`

const CellTitle = styled.div`
  font-size: 18px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
`

const CellLocation = styled.div`
  font-size: 16px;
  padding: 5px 0;
`

const Cell = ({ title, image, location, duration }) => (
  <CellGroup>
    <CellImage image={image} />
    <CellTitle>
      {title}
      <CellLocation>{location}</CellLocation>
      <CellLocation>{duration}</CellLocation>
    </CellTitle>
  </CellGroup>
)

export default Cell
