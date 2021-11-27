import L from 'leaflet'
import { useEffect } from 'react';
import { createMap } from '../../helpers';

import './style.scss';

type Props = {
  onClick?: L.LeafletMouseEventHandlerFn
}

const Map: React.FC<Props> = ({ onClick }) => {
  useEffect(() => {
    const map = createMap();
    const popup = L.popup();

    const clickHandler: L.LeafletMouseEventHandlerFn = (e) => {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked here")
        .openOn(map);

      onClick && onClick(e);
    }

    map.on('click', clickHandler);
  }, [onClick]);

  return <div id="map" />
}

Map.defaultProps = {
  onClick: () => console.log('map click event fired')
}

export default Map;