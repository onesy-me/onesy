import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStayPrimaryPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryPortraitW100'

      short_name='StayPrimaryPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-308q-8.5 0-14.25-5.75T460-328q0-8.5 5.75-14.25T480-348q8.5 0 14.25 5.75T500-328q0 8.5-5.75 14.25T480-308Zm-14-106v-244h28v244h-28ZM252-92v-776h456v776H252Zm28-94v66h400v-66H280Zm0-28h400v-532H280v532Zm0-560h400v-66H280v66Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryPortraitW100.displayName = 'OnesyIconMaterialStayPrimaryPortraitW100';

export default IconMaterialStayPrimaryPortraitW100;
