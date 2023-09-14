import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

const SortControl = ({ sortOptions, defaultSortBy, handleChange }) => {
    const [sortBy, setSortBy] = useState(defaultSortBy);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        handleChange(event);
    }

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column md={4}>
                                Sort by
                            </Form.Label>
                            <Col md={8}>
                                <Form.Select value={sortBy} onChange={handleSortChange}>
                                    {
                                        sortOptions.map((item) => (
                                            <option key={item.value} value={item.value}>
                                                {item.name}
                                            </option>
                                        ))
                                    }
                                </Form.Select>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SortControl;
