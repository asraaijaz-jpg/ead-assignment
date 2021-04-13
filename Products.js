import React from "react";
import { Table } from "semantic-ui-react";
import { Button, Icon, Container } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import data from "./data"

function Products() {
    return (
        <Container>
            <Container className='d-flex justify-content-center'>
                <h1>Products</h1>
                <Button>
                    <Button.Content visible>
                        <Icon name='shop' />
                    </Button.Content>
                </Button>
            </Container>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Cart</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map((item) => (
                        <Table.Row>
                            <Table.Cell>{item.product}</Table.Cell>
                            <Table.Cell>{item.price}</Table.Cell>
                            <Table.Cell><Button>
                                <Button.Content visible>
                                    <Icon name='shop' />
                                </Button.Content>
                            </Button></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Container>
    );
}

export default Products;