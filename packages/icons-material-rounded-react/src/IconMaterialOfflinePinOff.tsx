import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOfflinePinOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinOff'

      short_name='OfflinePinOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280q-17 0-28.5-11.5T320-320q0-17 11.5-28.5T360-360h240l80 80H360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-59 17-115t49-105l-63-63q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84l-63-62q-49 32-105 49T480-80Zm162-124L204-642q-22 37-33 78t-11 84q0 134 93 227t227 93q43 0 84-11t78-33Zm-83-355ZM401-401Zm234-253q12 11 12 28t-12 29l-51 51q-11 11-28 11t-28-11q-11-11-11-28t11-28l52-52q11-11 27-11t28 11ZM314-844q39-18 80.5-27t85.5-9q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 44-9 85.5T844-314q-7 15-23 19.5t-30-3.5q-14-8-19-24t2-32q13-30 19.5-62t6.5-64q0-134-93-227t-227-93q-32 0-64 6.5T354-774q-16 7-32 2t-24-19q-8-14-3.5-30t19.5-23Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinOff.displayName = 'OnesyIconMaterialOfflinePinOff';

export default IconMaterialOfflinePinOff;
