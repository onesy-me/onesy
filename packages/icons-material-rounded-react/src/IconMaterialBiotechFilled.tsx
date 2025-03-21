import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBiotechFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiotechFilled'

      short_name='Biotech'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-17 0-28.5-11.5T200-160q0-17 11.5-28.5T240-200h160v-80q-83 0-141.5-58.5T200-480q0-57 29-105t80-73q-4 22 1.5 43t17.5 40q-23 16-35.5 41T280-480q0 50 35 85t85 35h280q17 0 28.5 11.5T720-320q0 17-11.5 28.5T680-280H520v80h200q17 0 28.5 11.5T760-160q0 17-11.5 28.5T720-120H240Zm308-394h-1q-16 6-30.5-.5T496-537l-6-16q20-16 31-38.5t11-48.5q0-47-33-79.5T418-752l-5-13q-5-16 1.5-30.5T437-816h1q-6-15 1-29.5t24-20.5q15-5 29.5 1.5T512-842q16-6 31 1t21 23l82 225q6 16-.5 30.5T623-542h-1q6 16-1 31t-24 21q-15 5-29.5-1.5T548-514Zm-128-54q-30 0-51-21t-21-51q0-30 21-51t51-21q30 0 51 21t21 51q0 30-21 51t-51 21Z"/>
    </Icon>
  );
});

IconMaterialBiotechFilled.displayName = 'OnesyIconMaterialBiotechFilled';

export default IconMaterialBiotechFilled;
