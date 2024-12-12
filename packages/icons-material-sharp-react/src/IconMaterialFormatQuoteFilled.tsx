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
      <path d="m228-240 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L320-240h-92Zm360 0 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L680-240h-92Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteFilled.displayName = 'OnesyIconMaterialFormatQuoteFilled';

export default IconMaterialFormatQuoteFilled;
