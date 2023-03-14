import React from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import Button from "components/button";

const ComponentsPage: React.FC = () => {

  const handleClickButton = () => {
    console.log('Runnnn >>>');
  };

  return (
    <div>
      <h1>Demo Components Page</h1>
      <div>
        <Button
          className="test-class"
          shape="round"
          icon={<PoweroffOutlined />}
          buttonType="primary"
          size="middle"
          width="120px"
          height="auto"
          color="#fff"
          onClick={() => handleClickButton()}
        >
          Test Button
        </Button>
      </div>
    </div>

  )
}
  
  export default ComponentsPage;