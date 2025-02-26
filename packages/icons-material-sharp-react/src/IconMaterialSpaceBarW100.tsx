import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarW100'

      short_name='SpaceBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-412v-188h28v160h480v-160h28v188H212Z"/>
    </Icon>
  );
});

IconMaterialSpaceBarW100.displayName = 'OnesyIconMaterialSpaceBarW100';

export default IconMaterialSpaceBarW100;
