import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackgroundGridSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundGridSmallFilled'

      short_name='BackgroundGridSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120h120v-120H120v120Zm200 0h120v-120H320v120Zm200 0h120v-120H520v120Zm200 0h120v-120H720v120ZM120-720h120v-120H120v120Zm0 200h120v-120H120v120Zm0 200h120v-120H120v120Zm200-400h120v-120H320v120Zm0 200h120v-120H320v120Zm0 200h120v-120H320v120Zm200-400h120v-120H520v120Zm0 200h120v-120H520v120Zm0 200h120v-120H520v120Zm200-400h120v-120H720v120Zm0 200h120v-120H720v120Zm0 200h120v-120H720v120Z"/>
    </Icon>
  );
});

IconMaterialBackgroundGridSmallFilled.displayName = 'OnesyIconMaterialBackgroundGridSmallFilled';

export default IconMaterialBackgroundGridSmallFilled;
