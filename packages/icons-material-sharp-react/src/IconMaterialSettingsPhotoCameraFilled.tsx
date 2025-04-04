import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsPhotoCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhotoCameraFilled'

      short_name='SettingsPhotoCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-80v-320h120l40-40h80l40 40h120v320H520Zm200-80q33 0 56.5-23.5T800-240q0-33-23.5-56.5T720-320q-33 0-56.5 23.5T640-240q0 33 23.5 56.5T720-160ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-85 65H616q-14-43-50-71.5T482-620q-58 0-99 41t-41 99q0 48 27 84t71 50v266h-70Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhotoCameraFilled.displayName = 'OnesyIconMaterialSettingsPhotoCameraFilled';

export default IconMaterialSettingsPhotoCameraFilled;
