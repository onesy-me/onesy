import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatItalicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicW100Filled'

      short_name='FormatItalic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M241-239v-28h141l145-426H386v-28h312v28H557L412-267h141v28H241Z"/>
    </Icon>
  );
});

IconMaterialFormatItalicW100Filled.displayName = 'OnesyIconMaterialFormatItalicW100Filled';

export default IconMaterialFormatItalicW100Filled;
