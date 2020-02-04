import React, {Component} from 'react';
import {Page, Text, View, Document, StyleSheet, PDFViewer} from '@react-pdf/renderer';
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Row,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink,
    Form
} from "reactstrap";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const MyDocument = () =>
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1 also some text but require to refresh page</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>


class PdfTemplateViewer extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    PDF TEMPLATE VIEWER
                    <PDFViewer>
                        <MyDocument/>
                    </PDFViewer>
                </CardBody>
            </Card>
        );
    }
}

export default PdfTemplateViewer;