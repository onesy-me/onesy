import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFramePersonOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonOff'

      short_name='FramePersonOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m790-57-24-23h-86q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h6l-80-80H280q-17 0-28.5-11.5T240-280v-36q0-21 10.5-39.5T279-385q31-18 64.5-30.5T412-434L160-687v7q0 17-11.5 28.5T120-640q-17 0-28.5-11.5T80-680v-86l-26-26q-12-12-11.5-28.5T55-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57ZM526-320l-40-40q-45 0-85 10t-75 30h200Zm74-280q0 26-10.5 48.5T562-512l-57-57q7-5 11-13t4-18q0-17-11.5-28.5T480-640q-10 0-18 4t-13 11l-57-57q17-17 39.5-27.5T480-720q50 0 85 35t35 85Zm280 320v86l-80-80v-6q0-17 11.5-28.5T840-320q17 0 28.5 11.5T880-280ZM160-80q-33 0-56.5-23.5T80-160v-120q0-17 11.5-28.5T120-320q17 0 28.5 11.5T160-280v120h120q17 0 28.5 11.5T320-120q0 17-11.5 28.5T280-80H160Zm640-600v-120H680q-17 0-28.5-11.5T640-840q0-17 11.5-28.5T680-880h120q33 0 56.5 23.5T880-800v120q0 17-11.5 28.5T840-640q-17 0-28.5-11.5T800-680Zm-323 83Zm9 277ZM194-880h86q17 0 28.5 11.5T320-840q0 17-11.5 28.5T280-800h-6l-80-80Z"/>
    </Icon>
  );
});

IconMaterialFramePersonOff.displayName = 'OnesyIconMaterialFramePersonOff';

export default IconMaterialFramePersonOff;
