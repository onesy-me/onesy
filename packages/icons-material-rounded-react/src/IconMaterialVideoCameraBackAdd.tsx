import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraBackAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackAdd'

      short_name='VideoCameraBackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-480ZM160-160q-33 0-56.5-23.5T80-240v-200q0-17 11.5-28.5T120-480q17 0 28.5 11.5T160-440v200h480v-480H440q-17 0-28.5-11.5T400-760q0-17 11.5-28.5T440-800h200q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Zm119-265-55 73q-8 10-2 21t18 11h320q12 0 18-11t-2-21l-95-127q-6-8-16-8t-16 8l-89 119-49-65q-6-8-16-8t-16 8ZM160-640h-40q-17 0-28.5-11.5T80-680q0-17 11.5-28.5T120-720h40v-40q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v40h40q17 0 28.5 11.5T320-680q0 17-11.5 28.5T280-640h-40v40q0 17-11.5 28.5T200-560q-17 0-28.5-11.5T160-600v-40Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackAdd.displayName = 'OnesyIconMaterialVideoCameraBackAdd';

export default IconMaterialVideoCameraBackAdd;
