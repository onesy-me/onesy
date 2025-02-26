import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyCenterFilled'

      short_name='AlignJustifyCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-800h80v800h-80Zm160-200v-400h120v400H600Zm-360 0v-400h120v400H240Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyCenterFilled.displayName = 'OnesyIconMaterialAlignJustifyCenterFilled';

export default IconMaterialAlignJustifyCenterFilled;
