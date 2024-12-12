import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrokenImageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageFilled'

      short_name='BrokenImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-344l120 120 160-160 160 160 160-160 120 120v264H120Zm0-720h720v343L720-617 560-457 400-617 240-457 120-577v-263Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageFilled.displayName = 'OnesyIconMaterialBrokenImageFilled';

export default IconMaterialBrokenImageFilled;
