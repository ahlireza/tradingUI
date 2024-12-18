import * as React from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Dayjs } from 'dayjs'

interface BasicDatePickerProps {
  label?: string
  value?: Dayjs | null
  onChange: (date: Dayjs | null) => void;
}

//------------------------------
//---Basic Date Picker
//------------------------------
export const BasicDatePicker: React.FC<BasicDatePickerProps> = ({ label, value, onChange }) => {

  //------------------------------
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label={label}
          value={value}
          onChange={(newValue) => onChange(newValue)} // Handle the change properly
          sx={{
            "& .MuiOutlinedInput-input": {
              padding: "10px 14px !important"
            }
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

