import './schedule.scss';
import { AiOutlineClockCircle, AiOutlineInfoCircle } from 'react-icons/ai';

export interface ScheduleProps {
  dias1: string;
  dias2?: string;
  horario1: string;
  horario2?: string;
  info1: string;
  info2?: string;
  info3?: string;
  info4?: string;

}
export const Schedule = (props: ScheduleProps) => {
  const { dias1, dias2, horario1, horario2, info1, info2, info3, info4 } = props;


  return (
    <div className="horarios">
            
      <div className="columna1">
        <h1 className="icono">
          <AiOutlineClockCircle />
        </h1>
        <h1 className="titulo1">HORARIOS</h1>
        <h2 className="titulo2">{dias1}</h2>
        <p>{horario1}</p>
        <h2 className="titulo2">{dias2}</h2>
        <p>{horario2}</p>

      </div>

      <div className="columna2">
        <h1 className="icono">
          <AiOutlineInfoCircle />
        </h1>
        <h1 className="titulo1">INFORMACION IMPORTANTE</h1>
        <ul>
          <li>{info1}</li>
          <br />
          <li>{info2}</li>
          <br />
          <li>{info3}</li>
          <br />
          <li>{info4}</li>
        </ul>
      </div>
    </div>
  );
};
