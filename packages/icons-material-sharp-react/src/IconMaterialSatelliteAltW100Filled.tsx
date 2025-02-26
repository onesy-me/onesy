import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSatelliteAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteAltW100Filled'

      short_name='SatelliteAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M586-59v-28q117 0 198-81t81-198h28q0 64-24 120t-65.5 97.5Q762-107 706-83T586-59Zm0-128v-28q63 0 107-44t44-107h28q0 74-52.5 126.5T586-187Zm-86-151-99-99-65 65 100 99L252-89 33-308l184-184 99 100 65-65-99-100 113-113 99 99 65-65-99-100 184-184 219 219-184 184-100-99-65 65 100 99-114 114ZM73-307l179 179 62-62-179-179-62 62Zm261 96 62-62-179-179-62 62 179 179Zm165-525 179 179 62-62-179-179-62 62Zm262 97 62-62-179-179-62 62 179 179Z"/>
    </Icon>
  );
});

IconMaterialSatelliteAltW100Filled.displayName = 'OnesyIconMaterialSatelliteAltW100Filled';

export default IconMaterialSatelliteAltW100Filled;
