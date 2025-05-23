import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStethoscopeArrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeArrow'

      short_name='StethoscopeArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-240q-17 0-28.5-11.5T560-280q0-17 11.5-28.5T600-320h127l-35-35q-11-12-11.5-28.5T692-412q12-12 28-12t28 12l104 104q12 12 12 28t-12 28L748-148q-12 12-28 12t-28-12q-12-12-11.5-28.5T692-205l35-35H600ZM520-80q-103 0-171.5-77T280-340v-23q-86-14-143-80.5T80-600v-200q0-17 11.5-28.5T120-840h80q0-17 11.5-28.5T240-880q17 0 28.5 11.5T280-840v80q0 17-11.5 28.5T240-720q-17 0-28.5-11.5T200-760h-40v160q0 66 47 113t113 47q66 0 113-47t47-113v-160h-40q0 17-11.5 28.5T400-720q-17 0-28.5-11.5T360-760v-80q0-17 11.5-28.5T400-880q17 0 28.5 11.5T440-840h80q17 0 28.5 11.5T560-800v200q0 90-57 156.5T360-363v23q0 72 45.5 126T520-160q17 0 28.5 11.5T560-120q0 17-11.5 28.5T520-80Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeArrow.displayName = 'OnesyIconMaterialStethoscopeArrow';

export default IconMaterialStethoscopeArrow;
