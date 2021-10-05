import React from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';


import "react-datepicker/dist/react-datepicker.css";
import styles from './Datepicker.module.scss'

type Props = {
  startDate: Date,
  finishDate: Date,
  setStartDate: (arg: Date) => void,
  setFinishDate: (arg: Date) => void
}

export const DatepickerBlock: React.VFC<Props> = ({ startDate, finishDate, setFinishDate, setStartDate }) => {
  registerLocale('es', es)
  return (
    <div className={styles.container}>
      <div className={styles.dateDatepicker}>
        <div>
          <div className={styles.fieldName}>Начало аукциона</div>
        </div>
        <DatePicker className={styles.datepicker}
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    locale="es"
                    showTimeSelect
                    timeFormat="p"
                    timeIntervals={15}
                    dateFormat="Pp"
        />
      </div>
      <div className={styles.dateDatepicker}>
        <div>
          <div className={styles.fieldName}>Конец аукциона</div>
        </div>
        <DatePicker className={styles.datepicker}
                    selected={finishDate}
                    onChange={(date: any) => setFinishDate(date)}
                    locale="es"
                    showTimeSelect
                    timeFormat="p"
                    timeIntervals={15}
                    dateFormat="Pp"
        />
      </div>
    </div>

  )
}