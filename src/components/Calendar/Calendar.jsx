const Calendar = (props) => {

    let dm = (x, y) => {
        return (
            (y % 4 === 0) ? 29 : 28 + (x + Math.floor(x / 8)) % 2 + 2 % x + 2 * Math.floor(1 / x)
        )

    }


    return (<div>
        {props.calendar.days.map(c => <div key={c.id}>
            <div>{c.day}</div>
        </div>)}

        {props.calendar.months.map(m => <div key={m.id}>
            <div>{m.month}</div>
        </div>)}

        <div>
            {dm(2, 2000)}
            {dm(2, 2001)}
            {dm(2, 2020)}
            {dm(2, 2021)}
            {dm(2, 2024)}
            {dm(2, 2024)}
            {dm(2, 2024)}
        </div>

    </div>)

}

export default Calendar

