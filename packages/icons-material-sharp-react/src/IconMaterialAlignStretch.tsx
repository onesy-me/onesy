import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignStretch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignStretch'

      short_name='AlignStretch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-560v-240H80v-80h800v80H680v240H280ZM80-80v-80h200v-240h400v240h200v80H80Z"/>
    </Icon>
  );
});

IconMaterialAlignStretch.displayName = 'OnesyIconMaterialAlignStretch';

export default IconMaterialAlignStretch;
