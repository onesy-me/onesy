import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotateAuto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateAuto'

      short_name='RotateAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-76 0-144.5-27t-122-74.5Q160-229 126-293.5T83-434q-2-19 9-29.5t26-12.5q15-2 29 6.5t16 29.5q15 121 105.5 201T480-159q134 0 227-93t93-227q0-134-93-227t-227-93q-89 0-161.5 43.5T204-640h76q17 0 28.5 11.5T320-600q0 17-11.5 28.5T280-560H120q-17 0-28.5-11.5T80-600v-160q0-17 11.5-28.5T120-800q17 0 28.5 11.5T160-760v40q55-73 138-116.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480Zm-472 68h146l25 73q3 8 10.5 13.5T606-320q15 0 23.5-12.5T633-359L519-661q-3-9-11-14t-17-5h-22q-9 0-17 5t-11 14L327-360q-5 14 3.5 27t24.5 13q10 0 17.5-5.5T383-340l25-72Zm18-52 52-150h4l52 150H426Z"/>
    </Icon>
  );
});

IconMaterialRotateAuto.displayName = 'OnesyIconMaterialRotateAuto';

export default IconMaterialRotateAuto;
