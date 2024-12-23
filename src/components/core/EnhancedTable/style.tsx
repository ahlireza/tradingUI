import { styled } from "styled-components"
import { Typography } from "../Typography"


export const StyledTableWrapper = styled.div`
  position: relative;
  max-height: 620px;
  border-radius: 16px 16px 0 0;
  padding:0 0 0 0px;
  background-color: #fff;
  scrollbar-width: thin; 
  scrollbar-color: #F6F6F6 transparent; 
  overflow-x: auto !important;
  &::-webkit-scrollbar {
    height: 3px;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 24px;
    background-color: #F6F6F6;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-button {
    margin-bottom: 10px;
  }
`;

export const StyledTable = styled.table`
  position: relative;
  border-collapse: separate;
  border-spacing: 0px;
  display: table;
  width: 100%;
  margin: 0;
  overflow: auto;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.8s ease, transform 0.5s ease;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  &.fade-off {
    opacity: 1;
    transform: translateY(0);
  }

  thead {
    height: 72px;
    position: sticky;
    top: -1px;
    background-color: #fff;
    border-top: 1px solid #eeeff2;
    z-index: 1;

    tr {
      td {
        font-size: 12px;
        text-align: center;
        cursor: pointer;
        &:last-child {
          position: sticky;
          overflow: hidden;
          border-collapse: collapse;
          right: 0; 
          z-index: 2; 
        }
      }
    }
  }

  tbody {
    position: relative;

    tr {
      height: Auto;
      font-size: 12px;
      border-width: 1px;
      border-color: #e8e8e8;
      border-right: none;
      border-left: none;
      background-color: #fff;
    }

    td {
      padding: 10px 0;
      text-align: center;
      color: #101112;
      &:last-child {
        position: sticky;
        background-color: #fff;
        overflow: hidden;
        border-collapse: collapse;
        top: 0;
        right: 0px; 
        z-index: 0; 
      }
    }
  }
`;

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  direction: ltr;
  button {
    border: none;
    cursor: pointer;
    margin: 0 5px;
  }
`;

export const StyledRecorde = styled.div`
  display: flex;
  align-items: center;
`;

export const TextBody = styled(Typography)`
  color: #111827;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.3px;
  margin: 0;
`;

export const TextRecorde = styled(Typography)`
  color:#718096;
  ont-size: 12px;
  font-style: normal;
  font-weight: 600;
  margin: 0 16px 0 0;
`;

export const TextTHead = styled(Typography)`
  color: #718096;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  margin: 0;
`;
