import React, { useState } from "react";
import { Button, Form, Modal, Container, Row, Col, Card } from "react-bootstrap";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const BulkMessage = () => {
  const [message, setMessage] = useState("");
  const [recipientOption, setRecipientOption] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 You can replace this with your API call later
    console.log("Message:", message);
    console.log("Recipient:", recipientOption);

    // ✅ Show success modal
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
  <div class="container-fluid page-body-wrapper" style={{width: '1000px'}}>      

    <Sidebar/>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm p-4" style={{width: '500px'}}>
            <h3 className="text-center mb-4">📨 Send Bulk Message</h3>

            <Form onSubmit={handleSubmit}>
              {/* Dropdown */}
              <Form.Group className="mb-3">
                <Form.Label>Send To:</Form.Label>
                <Form.Select
                  value={recipientOption}
                  onChange={(e) => setRecipientOption(e.target.value)}
                >
                  <option value="all">All Users</option>
                  <option value="selected">Selected Users</option>
                </Form.Select>
              </Form.Group>

              {/* Message Box */}
              <Form.Group className="mb-4">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Submit Button */}
              <div className="text-center">
                <Button variant="primary" type="submit" size="lg">
                  Send Message
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* ✅ Success Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>✅ Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your bulk message has been successfully sent to{" "}
          <strong>{recipientOption === "all" ? "all users" : "selected users"}</strong>.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default BulkMessage;
