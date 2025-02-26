import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayForWorkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayForWorkFilled'

      short_name='PlayForWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q-100 0-170-70t-70-170h80q0 66 47 113t113 47q66 0 113-47t47-113h80q0 100-70 170t-170 70Zm0-201L320-521l56-57 64 64v-246h80v246l64-64 56 57-160 160Z"/>
    </Icon>
  );
});

IconMaterialPlayForWorkFilled.displayName = 'OnesyIconMaterialPlayForWorkFilled';

export default IconMaterialPlayForWorkFilled;
