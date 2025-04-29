import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  const handleChangeDate = (dateChange: Date | undefined) => {
    console.log(dateChange?.toISOString());
  };

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={(selectedDate) => {
        setDate(selectedDate);
        handleChangeDate(selectedDate);
      }}
      className="rounded-md border bg-white"
    />
  );
}
