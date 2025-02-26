import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatLetterSpacing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacing'

      short_name='FormatLetterSpacing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80 160-240l160-160 57 56-64 64h334l-63-64 56-56 160 160L640-80l-57-56 64-64H313l63 64-56 56ZM200-480v-400h80v400h-80Zm240 0v-400h80v400h-80Zm240 0v-400h80v400h-80Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacing.displayName = 'OnesyIconMaterialFormatLetterSpacing';

export default IconMaterialFormatLetterSpacing;
