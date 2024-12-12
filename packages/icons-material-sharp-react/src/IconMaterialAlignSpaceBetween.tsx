import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignSpaceBetween = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceBetween'

      short_name='AlignSpaceBetween'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-680v-120H80v-80h800v80H680v120H280ZM80-80v-80h200v-120h400v120h200v80H80Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceBetween.displayName = 'OnesyIconMaterialAlignSpaceBetween';

export default IconMaterialAlignSpaceBetween;
