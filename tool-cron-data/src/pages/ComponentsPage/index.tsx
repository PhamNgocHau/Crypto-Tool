import React from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import Button from "components/button";
import { testCallAPI } from "service/main";

const ComponentsPage: React.FC = () => {

  const handleClickButton = async () => {
    console.log('Runnnn >>>');
    await testCallAPI();
  };

  return (
    <div>
      <h1>Demo Components Page</h1>
      <div>
        <Button
          className="test-class"
          shape="round"
          // danger
          icon={<PoweroffOutlined />}
          type="primary"
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