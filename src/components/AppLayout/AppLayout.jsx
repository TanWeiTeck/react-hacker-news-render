import { useState } from 'react';
import { Alert } from 'antd';

import Header from '../Header/Header';

const AppLayout = ({ children }) => {
    const [alert, setAlert] = useState({ show: false, message: '' });

    return (
        <>
            {alert.show && (
                <Alert
                    message={alert.message}
                    type="warning"
                    closable={true}
                    afterClose={() => setAlert({ show: false, message: '' })}
                    showIcon={true}
                />
            )}
            <Header setAlert={setAlert} />
            {children}
        </>
    );
};

export default AppLayout;
