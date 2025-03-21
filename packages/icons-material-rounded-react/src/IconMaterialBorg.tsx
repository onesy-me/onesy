import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Borg'

      short_name='Borg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-11 0-21-3t-19-8L160-252q-19-11-29.5-29.5T120-322v-316q0-22 10.5-40.5T160-708l280-161q9-5 19-8t21-3q11 0 21 3t19 8l280 161q19 11 29.5 29.5T840-638v316q0 22-10.5 40.5T800-252L520-91q-9 5-19 8t-21 3ZM200-440v118l240 139v-137h-80q-17 0-28.5-11.5T320-360v-80H200Zm0-80h120v-80q0-17 11.5-28.5T360-640h80v-137L200-638v118Zm200 120h160v-160H400v160Zm360-40H640v80q0 17-11.5 28.5T600-320h-80v137l240-139v-118Zm0-80v-118L520-777v137h80q17 0 28.5 11.5T640-600v80h120Z"/>
    </Icon>
  );
});

IconMaterialBorg.displayName = 'OnesyIconMaterialBorg';

export default IconMaterialBorg;
