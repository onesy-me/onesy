import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatAlignRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignRight'

      short_name='FormatAlignRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-760v-80h720v80H120Zm240 160v-80h480v80H360ZM120-440v-80h720v80H120Zm240 160v-80h480v80H360ZM120-120v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignRight.displayName = 'OnesyIconMaterialFormatAlignRight';

export default IconMaterialFormatAlignRight;
