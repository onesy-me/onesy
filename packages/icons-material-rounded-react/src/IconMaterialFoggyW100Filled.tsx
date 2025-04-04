import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFoggyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoggyW100Filled'

      short_name='Foggy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-220q-8.5 0-14.25-5.75T700-240q0-8.5 5.75-14.25T720-260q8.5 0 14.25 5.75T740-240q0 8.5-5.75 14.25T720-220ZM280-100q-8.5 0-14.25-5.75T260-120q0-8.5 5.75-14.25T280-140q8.5 0 14.25 5.75T300-120q0 8.5-5.75 14.25T280-100Zm-40-126q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h360q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H240Zm160 120q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h280q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H400ZM300-346q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29.09-56.07 79.55-88.03Q417-854 479.62-854q85.38 0 145.88 57T695-655q75 4 117 49.5t42 105.8q0 63.7-44.92 108.7-44.91 45-109.08 45H300Z"/>
    </Icon>
  );
});

IconMaterialFoggyW100Filled.displayName = 'OnesyIconMaterialFoggyW100Filled';

export default IconMaterialFoggyW100Filled;
