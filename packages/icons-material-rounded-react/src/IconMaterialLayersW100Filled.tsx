import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersW100Filled'

      short_name='Layers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M218-441q-5-4-5.5-10.5T217-463q4-3 9-3t9 3l225 174q9 7 20 7t20-7l225-174q4-3 9-3t9 3q5 5 4.5 11.5T742-441L517-267q-17 13-37 13t-37-13L218-441Zm225 36L265-543q-23-18-23-47t23-47l178-138q17-13 37-13t37 13l178 138q23 18 23 47t-23 47L517-405q-17 13-37 13t-37-13Z"/>
    </Icon>
  );
});

IconMaterialLayersW100Filled.displayName = 'OnesyIconMaterialLayersW100Filled';

export default IconMaterialLayersW100Filled;
