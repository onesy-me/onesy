import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatClearW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClearW100Filled'

      short_name='FormatClear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m494-566-21-21 41-99H378q-7 0-10.5-4.5T364-700q0-5 3.5-9.5T378-714h362q6 0 10 4t4 10q0 6-4 10t-10 4H545l-51 120Zm264 404L453-468l-92 217q-2 4-5 6.5t-8 2.5q-8 0-12-6.5t-1-13.5l97-227-280-279q-4-4-4.5-9.5T152-788q5-5 10-5t10 5l606 606q4 4 4.5 9.5T778-162q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialFormatClearW100Filled.displayName = 'OnesyIconMaterialFormatClearW100Filled';

export default IconMaterialFormatClearW100Filled;
