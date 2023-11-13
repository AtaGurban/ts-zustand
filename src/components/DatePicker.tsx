import * as React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  // Дополнительные пропсы, если необходимо
}

const MyDatePicker: React.FC<DatePickerProps> = ({value, onChange}) => {

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        className='w-100'
        value={value}
        onChange={onChange}
      />
      {/* Вы можете использовать selectedDate где-то еще в компоненте или передать его в другие компоненты */}
    </LocalizationProvider>
  );
};

export default MyDatePicker;
