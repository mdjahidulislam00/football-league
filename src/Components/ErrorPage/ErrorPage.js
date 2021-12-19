import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <div>
            <Alert variant='warning'>
                <span style={{ color: 'red', fontSize: '30px' }}> 404 - Not Found: do not match url -------!</span><br />
                Please  write correct path or Url
            </Alert>
        </div>
    );
};

export default ErrorPage;