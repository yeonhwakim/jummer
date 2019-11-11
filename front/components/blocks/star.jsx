import React from 'react'
import styled from 'styled-components'
import StarIcon from '../elements/icons'
import FullStarIcon from '../elements/icons'

const StarWrap = styled.div`
  display: inline-block; 
  margin-right: 8px;
`
const Star = styled.span`
  display: inline-block;
  background:${StarIcon} no-repeat;
  width: 12px; 
  height:12px; 
  margin-right:2px;
`

const FullStar = styled.span`
  display: inline-block; 
  background:${FullStarIcon} no-repeat;
  width: ${props => props.width}; 
  height:12px; 
  line-height: 0; 
  vertical-align: top;
`


export default ({ star }) =>{
  const id = Date.now()
  const int = parseInt(star)
  const float = parseFloat(star)

  return (
  <StarWrap>
    {[1, 2, 3, 4, 5].map(i => {
      const width =  (i <= int ? 100 : int+1 < i ? 0 : (float - int) * 100) + '%'
      return(
        <>
          <Star icon={ 'star' } size={'20px'} color={'yellow'} key={id + i}>
            <FullStar icon={ 'fullStar' } size={'20px'} color={'yellow'} width = { width }/> 
          </Star>
        </>
      )}
    )}
  </StarWrap>
)}
