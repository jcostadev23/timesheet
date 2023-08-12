import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export function BasicDatePicker({value, onChange}) {

    const handleSelectedDate = (date) => {
        onChange(date);
    }

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CssBaseline/>
                <Container>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker 
                            label="Date"
                            value={value}
                            onChange={handleSelectedDate}
                            format='DD/MM/YYYY'/>
                    </DemoContainer>
                </Container>
            </LocalizationProvider>
        </div>
  );
}