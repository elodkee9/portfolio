import React, { Component } from 'react'

import github from '../assets/images/github.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import Card from '../components/Card'
import { Container, Row } from 'react-bootstrap'

class Carousel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub',
                    subtitle: 'My GitHub profile',
                    imgSrc: github,
                    link: 'https://github.com/elodkee9',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Facebook',
                    subtitle: 'My Facebook profile',
                    imgSrc: facebook,
                    link: 'https://www.facebook.com/elod.mihaly.14/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Instagram',
                    subtitle: 'My Instagram profile',
                    imgSrc: instagram,
                    link: 'https://www.instagram.com/elodmihaly/',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}      
                </Row>
            </Container>
        )
    }
}

export default Carousel
