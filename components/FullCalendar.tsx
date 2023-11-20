import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const FullCalendarComponent = () => {
  return (
    <div className='w-[80vw]'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridWeek'
        events={[
          { title: "Grade 1 - Maharlika | Mathematics | Activity 1", date: "2023-11-21" },
          { title: "Grade 1 - Maharlika | Science | Activity 1", date: "2023-11-22" },
        ]}
        eventMinHeight={400}
        eventMinWidth={400}
      />
    </div>
  );
};

export default FullCalendarComponent;
