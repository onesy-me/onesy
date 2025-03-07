import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMosque = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mosque'

      short_name='Mosque'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-411q-18-11-29-28.5T0-680q0-23 24-56t56-64q32 31 56 64t24 56q0 23-11 40.5T120-611v171h80v-80q0-25 16-48t46-30q-11-17-16.5-37t-5.5-41q0-40 19-74t51-56l125-84q20-14 45-14t45 14l125 84q32 22 51 56t19 74q0 21-5.5 41T698-598q30 7 46 30t16 48v80h80v-171q-18-11-29-28.5T800-680q0-23 24-56t56-64q32 31 56 64t24 56q0 23-11 40.5T920-611v411q0 33-23.5 56.5T840-120H560q-17 0-28.5-11.5T520-160v-120q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280v120q0 17-11.5 28.5T400-120H120q-33 0-56.5-23.5T40-200Zm356-400h168q32 0 54-22t22-54q0-20-9-36.5T606-740l-126-84-126 84q-16 11-25 27.5t-9 36.5q0 32 22 54t54 22ZM120-200h240v-80q0-50 35-85t85-35q50 0 85 35t35 85v80h240v-160h-80q-33 0-56.5-23.5T680-440v-80H280v80q0 33-23.5 56.5T200-360h-80v160Zm360-320Zm0-80Zm0 2Z"/>
    </Icon>
  );
});

IconMaterialMosque.displayName = 'OnesyIconMaterialMosque';

export default IconMaterialMosque;
