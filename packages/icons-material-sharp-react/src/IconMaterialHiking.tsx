import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHiking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hiking'

      short_name='Hiking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-40 123-622q6-29 27-43.5t44-14.5q23 0 42.5 10t31.5 30l40 64q18 29 46.5 52.5T700-529v-71h60v560h-60v-406q-48-11-89-35t-71-59l-24 120 84 80v300h-80v-240l-84-80-72 320h-84Zm17-395-124-23 53-275 125 24-54 274Zm243-305q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/>
    </Icon>
  );
});

IconMaterialHiking.displayName = 'OnesyIconMaterialHiking';

export default IconMaterialHiking;
