import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatItalicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicW100'

      short_name='FormatItalic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M241-239v-28h141l145-426H386v-28h312v28H557L412-267h141v28H241Z"/>
    </Icon>
  );
});

IconMaterialFormatItalicW100.displayName = 'OnesyIconMaterialFormatItalicW100';

export default IconMaterialFormatItalicW100;
