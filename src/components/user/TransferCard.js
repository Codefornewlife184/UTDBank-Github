import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'

const TransferCard = (props) => {
    return (
        <Container >
            <Row class="nav" style={{margin:"0.5rem", borderStyle:"display"}}>
            <Col class="nav-item">
                <p>{props.fromAccount}</p>
            </Col>
            <Col class="nav-item">
                <p>{props.toAccount}</p>
            </Col>
            <Col class="nav-item" >
                <p style={{color:`${props.color}`}} >{props.amount + " " + props.currencyCode}</p>
            </Col>
            <Col class="nav-item">
                <p>{props.date}</p>
            </Col>
            </Row>
        </Container>
    )
}

export default TransferCard
