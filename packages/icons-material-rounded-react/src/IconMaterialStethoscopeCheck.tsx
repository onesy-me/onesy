import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStethoscopeCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeCheck'

      short_name='StethoscopeCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m665-148-85-85q-11-12-11-28.5t12-28.5q12-12 28-12t28 12l57 57 141-142q12-12 28.5-12t28.5 12q12 12 12 28.5T892-318L722-148q-12 12-28.5 12T665-148ZM520-80q-103 0-171.5-77T280-340v-23q-86-14-143-80.5T80-600v-200q0-17 11.5-28.5T120-840h80q0-17 11.5-28.5T240-880q17 0 28.5 11.5T280-840v80q0 17-11.5 28.5T240-720q-17 0-28.5-11.5T200-760h-40v160q0 66 47 113t113 47q66 0 113-47t47-113v-160h-40q0 17-11.5 28.5T400-720q-17 0-28.5-11.5T360-760v-80q0-17 11.5-28.5T400-880q17 0 28.5 11.5T440-840h80q17 0 28.5 11.5T560-800v200q0 90-57 156.5T360-363v23q0 72 45.5 126T520-160q17 0 28.5 11.5T560-120q0 17-11.5 28.5T520-80Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeCheck.displayName = 'OnesyIconMaterialStethoscopeCheck';

export default IconMaterialStethoscopeCheck;
