import styled from "styled-components";

function Headline({name}) {
    return <Headline_Style>{name}</Headline_Style>
}

const Headline_Style = styled.h1`
    color: white;
    padding-left: 0.7rem;
`

export default Headline;