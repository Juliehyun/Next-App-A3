import { Card } from "react-bootstrap";

export default function PageHeader(props) {
    return (
        <>
        <Card className="bg-light ">
            <Card.Body><b>{props.text}</b></Card.Body>
        </Card>
        <br/>
      </>
    );
} 