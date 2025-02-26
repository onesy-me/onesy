import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextClipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextClipFilled'

      short_name='FormatTextClip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-640h80v640h-80Zm560 0v-280H320v-80h400v-280h80v640h-80Z"/>
    </Icon>
  );
});

IconMaterialFormatTextClipFilled.displayName = 'OnesyIconMaterialFormatTextClipFilled';

export default IconMaterialFormatTextClipFilled;
