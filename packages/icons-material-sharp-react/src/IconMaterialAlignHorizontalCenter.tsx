import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenter'

      short_name='AlignHorizontalCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-200H240v-120h200v-160H120v-120h320v-200h80v200h320v120H520v160h200v120H520v200h-80Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenter.displayName = 'OnesyIconMaterialAlignHorizontalCenter';

export default IconMaterialAlignHorizontalCenter;
