# Just a Date Picker

**Just a Date Picker** is a fully customizable React date picker component. It accepts and returns dates in the `yyyy-mm-dd` format, making it simple and intuitive to use.

![Date Picker Preview](https://github.com/tmtm8976/just-a-date-picker/blob/main/assets/date-picker-preview.png)

## Features

- Accepts dates in `yyyy-mm-dd` format.
- Returns selected dates in the same `yyyy-mm-dd` format.
- Fully customizable to match your application's design.
- Lightweight and easy to integrate.

## Installation

Install the package via npm:

```bash
npm install just-a-date-picker
```

## Usage

Here is an example of how to use the date picker in your React project:

```jsx
import React, { useState } from 'react';
import DatePicker from 'just-a-date-picker';

const App = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log('Selected Date:', date);
    };

    return (
        <div>
            <h1>Pick a Date</h1>
            <DatePicker value={selectedDate} onChange={handleDateChange} />
        </div>
    );
};

export default App;
```

## Props
| Prop                          | Type     | Description                                      |
|-------------------------------|----------|--------------------------------------------------|
| `value`                       | `string` | The current date in `yyyy-mm-dd` format.         |
| `onChange`                    | `func`   | Callback function triggered on date selection.   |
| `yearPrevBtnIcon`             | `jsx`    | Icon for the previous year button.               |
| `yearNextBtnIcon`             | `jsx`    | Icon for the next year button.                   |
| `monthPrevBtnIcon`            | `jsx`    | Icon for the previous month button.              |
| `monthNextBtnIcon`            | `jsx`    | Icon for the next month button.                  |
| `rootContainerClassName`      | `string` | Class name for the root container.               |
| `pickerHeaderContainerClassName` | `string` | Class name for the picker header container.      |
| `yearPrevBtnClassName`        | `string` | Class name for the previous year button.         |
| `monthBtnsClassName`          | `string` | Class name for the month buttons.                |
| `monthPrevBtnClassName`       | `string` | Class name for the previous month button.        |
| `monthYearContainerClassName` | `string` | Class name for the month-year container.         |
| `monthTextClassName`          | `string` | Class name for the month text.                   |
| `yearTextClassName`           | `string` | Class name for the year text.                    |
| `monthNextBtnClassName`       | `string` | Class name for the next month button.            |
| `yearNextBtnClassName`        | `string` | Class name for the next year button.             |
| `daysContainerClassName`      | `string` | Class name for the days container.               |
| `weekDayHeaderItemClassName`  | `string` | Class name for the weekday header items.         |
| `emptyFillToDaysDivClassName` | `string` | Class name for empty filler divs in the days grid.|
| `dayBtnClassName`             | `string` | Class name for individual day buttons.           |
| `todayBtnClassName`           | `string` | Class name for the "today" button.               |
| `selectedBtnClassName`        | `string` | Class name for the selected day button.          |

## Example

```jsx
<DatePicker
    value="2023-01-01"
    onChange={(date) => console.log(date)}
/>
```

## License

This project is licensed under the [MIT License](LICENSE).

---
**Just a Date Picker**: She is just a date picker.