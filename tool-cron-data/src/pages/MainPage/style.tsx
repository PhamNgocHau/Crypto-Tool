import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  .left-block {
    .menu-wrapper {
      width: 250px;
      background: #001529;
      min-height: 100vh;
      padding: 10px;
      .ant-btn {
        margin-top: 16px;
      }
      .menu-icon {
        padding-right: 5px;
      }
      .menu-label {
        font-size: 14px;
      }
      .ant-menu-inline-collapsed {
        .menu-label {
          visibility: hidden;
        }
      }
      .ant-menu-inline {
        .menu-label {
          visibility: show;
        }
      }
    }
    .menu-collapsed {
      width: 100px;
      transition-property: opacity, left;
      transition-duration: 2s;
      .ant-btn {
        margin-left: 16px;
      }
      .ant-menu-inline-collapsed-tooltip { 
        display: none;
      }
    }
  }
`;