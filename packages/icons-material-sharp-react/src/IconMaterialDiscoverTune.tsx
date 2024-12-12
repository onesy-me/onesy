import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiscoverTune = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscoverTune'

      short_name='DiscoverTune'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-600v-80h120v-160h80v160h120v80H520Zm120 480v-400h80v400h-80Zm-400 0v-160H120v-80h320v80H320v160h-80Zm0-320v-400h80v400h-80Z"/>
    </Icon>
  );
});

IconMaterialDiscoverTune.displayName = 'OnesyIconMaterialDiscoverTune';

export default IconMaterialDiscoverTune;
