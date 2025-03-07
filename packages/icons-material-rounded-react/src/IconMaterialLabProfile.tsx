import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabProfile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfile'

      short_name='LabProfile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-480q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560h240q17 0 28.5 11.5T640-520q0 17-11.5 28.5T600-480H360Zm0-160q-17 0-28.5-11.5T320-680q0-17 11.5-28.5T360-720h240q17 0 28.5 11.5T640-680q0 17-11.5 28.5T600-640H360ZM240-400h300q29 0 54 12.5t42 35.5l84 110v-558H240v400Zm0 240h442L573-303q-6-8-14.5-12.5T540-320H240v160Zm480 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80Zm-480-80v-640 640Zm0-160v-80 80Z"/>
    </Icon>
  );
});

IconMaterialLabProfile.displayName = 'OnesyIconMaterialLabProfile';

export default IconMaterialLabProfile;
