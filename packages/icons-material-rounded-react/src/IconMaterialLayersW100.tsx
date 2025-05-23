import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayersW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersW100'

      short_name='Layers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M218-441q-5-4-5.5-10.5T217-463q4-3 9-3t9 3l225 174q9 7 20 7t20-7l225-174q4-3 9-3t9 3q5 5 4.5 11.5T742-441L517-267q-17 13-37 13t-37-13L218-441Zm225 36L265-543q-23-18-23-47t23-47l178-138q17-13 37-13t37 13l178 138q23 18 23 47t-23 47L517-405q-17 13-37 13t-37-13Zm57-22 177-138q13-10 13-25t-13-25L500-753q-9-7-20-7t-20 7L283-615q-13 10-13 25t13 25l177 138q9 7 20 7t20-7Zm-20-163Z"/>
    </Icon>
  );
});

IconMaterialLayersW100.displayName = 'OnesyIconMaterialLayersW100';

export default IconMaterialLayersW100;
