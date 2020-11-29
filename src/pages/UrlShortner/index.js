import React, { useState, useCallback } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { MdContentCopy } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';
import defaultValues from './defaultValues';
import axios from 'axios';

const UrlShortener = () => {
    const [url, setUrl] = useState({ long: '', short: '' });

    const copyToClipboard = text => {
        navigator.clipboard.writeText(text);
        toast.success(`Copied to clipboard`)
    }

    const onSubmit = useCallback(payload => {
        axios
            .post(`${process.env.REACT_APP_API_ADDRESS}`, payload)
            .then(response => response.data)
            .then(data => {
                const shortUrl = `${process.env.REACT_APP_API_ADDRESS}/${data.short}`;
                setUrl({ long: data.long, short: shortUrl });
                copyToClipboard(shortUrl);
            })
            .catch(e => {
                // give priority to api's error
                const responseErrors = e?.response?.data || e;
                if (Array.isArray(responseErrors)) {
                    responseErrors.forEach(error => toast.error(error.message))
                } else {
                    toast.error(responseErrors.message)
                }
            });
    }, [setUrl, copyToClipboard,]);

    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-4">
                <Col>
                    <Form.Group controlId="group-long">
                        <Form.Label>Long url</Form.Label>
                        <Form.Control
                            name="long"
                            ref={register}
                            autoComplete="off"
                            placeholder="http://"
                            isInvalid={errors.long}
                        />
                        <Form.Control.Feedback type="invalid">{errors?.long?.message}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="group-short">
                        <Form.Label>Short url</Form.Label>
                        <Form.Control
                            name="short"
                            ref={register}
                            autoComplete="off"
                            isInvalid={errors.short}
                        />
                        <Form.Control.Feedback type="invalid">{errors?.short?.message}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Shorten url
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {url.long && <Alert
                        variant="default"
                        onClick={() => copyToClipboard(url.long)}
                    >
                        <a href="#" className="stretched-link text-default">
                            <MdContentCopy />Original url: {url.long}
                        </a>
                    </Alert>}
                    {url.short && <Alert
                        variant="default"
                        onClick={() => copyToClipboard(url.short)}
                    >
                        <a href="#" className="stretched-link text-default">
                            <MdContentCopy />Shortened url: {url.short}
                        </a>
                    </Alert>}
                </Col>
            </Row>
        </form>
    )
}

export default UrlShortener;