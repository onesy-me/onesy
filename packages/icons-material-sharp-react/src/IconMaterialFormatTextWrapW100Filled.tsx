import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextWrapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextWrapW100Filled'

      short_name='FormatTextWrap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-536h28v536h-28Zm508 0v-536h28v536h-28Zm-282-83L333-400l105-104 19 19-71 71h120q45 0 75.5-30.5T612-520q0-45-30.5-75.5T506-626H320v-28h186q56 0 95 39t39 95q0 56-39 95t-95 39H386l71 71-19 20Z"/>
    </Icon>
  );
});

IconMaterialFormatTextWrapW100Filled.displayName = 'OnesyIconMaterialFormatTextWrapW100Filled';

export default IconMaterialFormatTextWrapW100Filled;
