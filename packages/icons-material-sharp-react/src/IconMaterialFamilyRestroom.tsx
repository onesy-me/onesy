import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyRestroom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyRestroom'

      short_name='FamilyRestroom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-720q-33 0-56.5-23.5T640-800q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800q0 33-23.5 56.5T720-720ZM680-80v-442h-73l53-158h120l120 360H800v240H680ZM500-500q-25 0-42.5-17.5T440-560q0-25 17.5-42.5T500-620q25 0 42.5 17.5T560-560q0 25-17.5 42.5T500-500ZM220-720q-33 0-56.5-23.5T140-800q0-33 23.5-56.5T220-880q33 0 56.5 23.5T300-800q0 33-23.5 56.5T220-720ZM140-80v-280H80v-320h280v320h-60v280H140Zm300 0v-160h-40v-220h200v220h-40v160H440Z"/>
    </Icon>
  );
});

IconMaterialFamilyRestroom.displayName = 'OnesyIconMaterialFamilyRestroom';

export default IconMaterialFamilyRestroom;
