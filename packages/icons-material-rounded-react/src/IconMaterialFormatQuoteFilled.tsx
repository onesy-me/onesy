import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatQuoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteFilled'

      short_name='FormatQuote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m262-300 58-100q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L331-260q-5 9-14 14.5t-20 5.5q-23 0-34.5-20t-.5-40Zm360 0 58-100q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L691-260q-5 9-14 14.5t-20 5.5q-23 0-34.5-20t-.5-40Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteFilled.displayName = 'OnesyIconMaterialFormatQuoteFilled';

export default IconMaterialFormatQuoteFilled;
