/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import  { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

function SlideShow() {
  const { allFile } = useStaticQuery(
    graphql`
  {
    allFile(sort: {fields: name, order: DESC}, filter: {relativeDirectory: {eq: "slideshow"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 600 , maxHeight:600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
  )

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const items =allFile.edges;
  console.log(items);
  const slides = items.map((node) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={node.id}
      >
        <Img
          fluid={node.node.childImageSharp.fluid}
          key={node.node.id}
          alt={node.node.name.replace(/-/g, ' ').substring(2)}
        />      
        <CarouselCaption captionText={node.node.caption} captionHeader={node.node.caption} />

      </CarouselItem>
    );
  });

  return (
    <Carousel style={{ height:"300px" ,width:"300px"}}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  )
}

export default SlideShow