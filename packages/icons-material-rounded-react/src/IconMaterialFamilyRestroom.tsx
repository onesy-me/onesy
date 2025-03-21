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
      <path d="M720-720q-33 0-56.5-23.5T640-800q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800q0 33-23.5 56.5T720-720Zm-40 600v-280q0-40-20.5-72T607-522l35-103q8-25 29.5-40t48.5-15q27 0 48.5 15t29.5 40l84 252q7 20-5.5 36.5T844-320h-44v200q0 17-11.5 28.5T760-80h-40q-17 0-28.5-11.5T680-120ZM500-500q-25 0-42.5-17.5T440-560q0-25 17.5-42.5T500-620q25 0 42.5 17.5T560-560q0 25-17.5 42.5T500-500ZM220-720q-33 0-56.5-23.5T140-800q0-33 23.5-56.5T220-880q33 0 56.5 23.5T300-800q0 33-23.5 56.5T220-720Zm-80 600v-240h-20q-17 0-28.5-11.5T80-400v-200q0-33 23.5-56.5T160-680h120q33 0 56.5 23.5T360-600v200q0 17-11.5 28.5T320-360h-20v240q0 17-11.5 28.5T260-80h-80q-17 0-28.5-11.5T140-120Zm300 0v-120q-17 0-28.5-11.5T400-280v-120q0-25 17.5-42.5T460-460h80q25 0 42.5 17.5T600-400v120q0 17-11.5 28.5T560-240v120q0 17-11.5 28.5T520-80h-40q-17 0-28.5-11.5T440-120Z"/>
    </Icon>
  );
});

IconMaterialFamilyRestroom.displayName = 'OnesyIconMaterialFamilyRestroom';

export default IconMaterialFamilyRestroom;
