import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatAlignJustifyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignJustifyFilled'

      short_name='FormatAlignJustify'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignJustifyFilled.displayName = 'OnesyIconMaterialFormatAlignJustifyFilled';

export default IconMaterialFormatAlignJustifyFilled;
