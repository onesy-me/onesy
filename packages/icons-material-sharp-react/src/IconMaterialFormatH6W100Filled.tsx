import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH6W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH6W100Filled'

      short_name='FormatH6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-306v-348h28v160h212v-160h28v348h-28v-160H200v160h-28Zm408 0q-24.75 0-42.37-17.63Q520-341.25 520-366v-228q0-24.75 17.63-42.38Q555.25-654 580-654h208v28H580q-14 0-23 9t-9 23v100h180q24.75 0 42.38 17.62Q788-458.75 788-434v68q0 24.75-17.62 42.37Q752.75-306 728-306H580Zm-32-160v100q0 14 9 23t23 9h148q14 0 23-9t9-23v-68q0-14-9-23t-23-9H548Z"/>
    </Icon>
  );
});

IconMaterialFormatH6W100Filled.displayName = 'OnesyIconMaterialFormatH6W100Filled';

export default IconMaterialFormatH6W100Filled;
