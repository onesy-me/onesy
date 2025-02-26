import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatColorText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorText'

      short_name='FormatColorText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80 0v-160h800V0H80Zm140-280 210-560h100l210 560h-96l-50-144H368l-52 144h-96Zm176-224h168l-82-232h-4l-82 232Z"/>
    </Icon>
  );
});

IconMaterialFormatColorText.displayName = 'OnesyIconMaterialFormatColorText';

export default IconMaterialFormatColorText;
