import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGoogleTvRemote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleTvRemote'

      short_name='GoogleTvRemote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q-25 0-42.5-17.5T420-740q0-25 17.5-42.5T480-800q25 0 42.5 17.5T540-740q0 25-17.5 42.5T480-680Zm0 640q-83 0-141.5-58.5T280-240v-480q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v480q0 83-58.5 141.5T480-40Zm0-600q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0 520q50 0 85-35t35-85v-367q-25 23-56 35t-64 12q-33 0-64-12t-56-35v367q0 50 35 85t85 35Zm-60-200q17 0 28.5-11.5T460-360q0-17-11.5-28.5T420-400q-17 0-28.5 11.5T380-360q0 17 11.5 28.5T420-320Zm0-120q17 0 28.5-11.5T460-480q0-17-11.5-28.5T420-520q-17 0-28.5 11.5T380-480q0 17 11.5 28.5T420-440Zm120 0q17 0 28.5-11.5T580-480q0-17-11.5-28.5T540-520q-17 0-28.5 11.5T500-480q0 17 11.5 28.5T540-440Zm0 120q17 0 28.5-11.5T580-360q0-17-11.5-28.5T540-400q-17 0-28.5 11.5T500-360q0 17 11.5 28.5T540-320ZM420-200q17 0 28.5-11.5T460-240q0-17-11.5-28.5T420-280q-17 0-28.5 11.5T380-240q0 17 11.5 28.5T420-200Zm120 0q17 0 28.5-11.5T580-240q0-17-11.5-28.5T540-280q-17 0-28.5 11.5T500-240q0 17 11.5 28.5T540-200Zm-60-360Z"/>
    </Icon>
  );
});

IconMaterialGoogleTvRemote.displayName = 'OnesyIconMaterialGoogleTvRemote';

export default IconMaterialGoogleTvRemote;
