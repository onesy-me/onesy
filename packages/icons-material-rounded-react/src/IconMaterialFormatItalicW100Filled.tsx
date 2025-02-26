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
      <path d="M255-239q-5.88 0-9.94-4.08-4.06-4.09-4.06-10 0-5.92 4.06-9.92t9.94-4h127l145-426H400q-5.88 0-9.94-4.08-4.06-4.09-4.06-10 0-5.92 4.06-9.92t9.94-4h284q5.88 0 9.94 4.08 4.06 4.09 4.06 10 0 5.92-4.06 9.92t-9.94 4H557L412-267h127q5.88 0 9.94 4.08 4.06 4.09 4.06 10 0 5.92-4.06 9.92t-9.94 4H255Z"/>
    </Icon>
  );
});

IconMaterialFormatItalicW100Filled.displayName = 'OnesyIconMaterialFormatItalicW100Filled';

export default IconMaterialFormatItalicW100Filled;
