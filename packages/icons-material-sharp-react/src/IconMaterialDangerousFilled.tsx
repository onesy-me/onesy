import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDangerousFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DangerousFilled'

      short_name='Dangerous'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm36-190 114-114 114 114 56-56-114-114 114-114-56-56-114 114-114-114-56 56 114 114-114 114 56 56Z"/>
    </Icon>
  );
});

IconMaterialDangerousFilled.displayName = 'OnesyIconMaterialDangerousFilled';

export default IconMaterialDangerousFilled;
