import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMuseumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumW100Filled'

      short_name='Museum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-28h80v-412h-80l348-244 348 244h-80v412h80v28H132Zm220-134h28v-186l100 148 100-148v186h28v-228h-34l-94 140-94-140h-34v228Z"/>
    </Icon>
  );
});

IconMaterialMuseumW100Filled.displayName = 'OnesyIconMaterialMuseumW100Filled';

export default IconMaterialMuseumW100Filled;
