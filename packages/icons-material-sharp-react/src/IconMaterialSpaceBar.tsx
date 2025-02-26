import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBar'

      short_name='SpaceBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360v-240h80v160h480v-160h80v240H160Z"/>
    </Icon>
  );
});

IconMaterialSpaceBar.displayName = 'OnesyIconMaterialSpaceBar';

export default IconMaterialSpaceBar;
