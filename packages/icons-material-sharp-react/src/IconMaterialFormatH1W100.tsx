import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH1W100'

      short_name='FormatH1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-306v-348h28v160h212v-160h28v348h-28v-160H280v160h-28Zm428 0v-320h-80v-28h108v348h-28Z"/>
    </Icon>
  );
});

IconMaterialFormatH1W100.displayName = 'OnesyIconMaterialFormatH1W100';

export default IconMaterialFormatH1W100;
