import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorOccupied = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorOccupied'

      short_name='SensorOccupied'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M8.14,15h7.7c-1.16-0.65-2.5-1-3.85-1C10.65,14,9.32,14.35,8.14,15z" opacity=".3"/><circle cx="12" cy="8" opacity=".3" r="1"/><path d="M12,11c1.66,0,3-1.34,3-3s-1.34-3-3-3S9,6.34,9,8S10.34,11,12,11z M12,7c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1 S11.45,7,12,7z"/><path d="M12,12c-1.84,0-3.56,0.5-5.03,1.37C6.36,13.72,6,14.39,6,15.09V17h12v-1.91c0-0.7-0.36-1.36-0.97-1.72 C15.56,12.5,13.84,12,12,12z M8.14,15c1.18-0.65,2.51-1,3.86-1c1.35,0,2.68,0.35,3.85,1H8.14z"/><path d="M21.23,8.15l1.85-0.77c-1.22-2.91-3.55-5.25-6.46-6.46l-0.77,1.85C18.27,3.79,20.21,5.73,21.23,8.15z"/><path d="M8.15,2.77L7.38,0.92C4.47,2.14,2.14,4.47,0.92,7.38l1.85,0.77C3.79,5.73,5.73,3.79,8.15,2.77z"/><path d="M2.77,15.85l-1.85,0.77c1.22,2.91,3.55,5.25,6.46,6.46l0.77-1.85C5.73,20.21,3.79,18.27,2.77,15.85z"/><path d="M15.85,21.23l0.77,1.85c2.91-1.22,5.25-3.55,6.46-6.46l-1.85-0.77C20.21,18.27,18.27,20.21,15.85,21.23z"/></g></g>
    </Icon>
  );
});

IconMaterialSensorOccupied.displayName = 'OnesyIconMaterialSensorOccupied';

export default IconMaterialSensorOccupied;
