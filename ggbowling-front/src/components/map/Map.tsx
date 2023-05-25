/* eslint-disable jsx-a11y/iframe-has-title */
import './map.scss';

export const Map = () => {
  return (
    <div className="mapa">
      <iframe
        className="iframe"
        height="400"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-8.407738208770754%2C43.35479793310456%2C-8.403258919715883%2C43.356502452526534&amp;layer=mapnik"
      ></iframe>
    </div>
  );
};
