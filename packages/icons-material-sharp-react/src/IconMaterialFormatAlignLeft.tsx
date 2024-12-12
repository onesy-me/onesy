import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatAlignLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignLeft'

      short_name='FormatAlignLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignLeft.displayName = 'OnesyIconMaterialFormatAlignLeft';

export default IconMaterialFormatAlignLeft;
