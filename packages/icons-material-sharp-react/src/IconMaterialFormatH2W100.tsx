import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH2W100'

      short_name='FormatH2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-306v-348h28v160h212v-160h28v348h-28v-160H200v160h-28Zm348 0v-128q0-24.75 17.63-42.38Q555.25-494 580-494h148q14 0 23-9t9-23v-68q0-14-9-23t-23-9H520v-28h208q24.75 0 42.38 17.62Q788-618.75 788-594v68q0 24.75-17.62 42.37Q752.75-466 728-466H580q-14 0-23 9t-9 23v100h240v28H520Z"/>
    </Icon>
  );
});

IconMaterialFormatH2W100.displayName = 'OnesyIconMaterialFormatH2W100';

export default IconMaterialFormatH2W100;
