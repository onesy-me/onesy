import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachFileAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachFileAddW100'

      short_name='AttachFileAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M658-500v-180h28v180h-28ZM430-299q-13-11-20.5-26.5T402-359v-321h28v381Zm50.94 167Q394-132 334-193.03T274-341v-343q0-60 41-102t101-42q60 0 101 42t41 102v284h-28v-285q0-48-32.82-81.5T416-800q-47.88 0-80.94 34Q302-732 302-684v343q0 75 52 128t127 53q21.39 0 40.64-4.5T558-178v31q-18 8-37.5 11.5t-39.56 3.5ZM658-172v-100H558v-28h100v-100h28v100h100v28H686v100h-28Z"/>
    </Icon>
  );
});

IconMaterialAttachFileAddW100.displayName = 'OnesyIconMaterialAttachFileAddW100';

export default IconMaterialAttachFileAddW100;
