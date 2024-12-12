import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFoundationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoundationW100'

      short_name='Foundation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M236-172v-148h-77v-28h77v-225l-127 94-17-22 388-287 389 287-17 22-127-94v225h76v28h-76v148h-28v-148H494v148h-28v-148H264v148h-28Zm28-176h202v-395L264-593v245Zm230 0h203v-245L494-743v395Z"/>
    </Icon>
  );
});

IconMaterialFoundationW100.displayName = 'OnesyIconMaterialFoundationW100';

export default IconMaterialFoundationW100;
