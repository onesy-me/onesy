import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDangerous = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dangerous'

      short_name='Dangerous'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm36-190 114-114 114 114 56-56-114-114 114-114-56-56-114 114-114-114-56 56 114 114-114 114 56 56Zm-2 110h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z"/>
    </Icon>
  );
});

IconMaterialDangerous.displayName = 'OnesyIconMaterialDangerous';

export default IconMaterialDangerous;
