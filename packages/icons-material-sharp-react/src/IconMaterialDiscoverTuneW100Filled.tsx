import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiscoverTuneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscoverTuneW100Filled'

      short_name='DiscoverTune'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-626v-28h120v-160h28v160h120v28H546Zm120 480v-348h28v348h-28Zm-400 0v-160H146v-28h268v28H294v160h-28Zm0-320v-348h28v348h-28Z"/>
    </Icon>
  );
});

IconMaterialDiscoverTuneW100Filled.displayName = 'OnesyIconMaterialDiscoverTuneW100Filled';

export default IconMaterialDiscoverTuneW100Filled;
