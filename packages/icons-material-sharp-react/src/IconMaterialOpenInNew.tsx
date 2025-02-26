import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInNew = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNew'

      short_name='OpenInNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h360v80H200v560h560v-280h80v360H120Zm268-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
    </Icon>
  );
});

IconMaterialOpenInNew.displayName = 'OnesyIconMaterialOpenInNew';

export default IconMaterialOpenInNew;
