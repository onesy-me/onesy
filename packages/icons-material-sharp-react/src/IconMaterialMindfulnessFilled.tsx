import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMindfulnessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MindfulnessFilled'

      short_name='Mindfulness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l65 255H760v200H600v80H240Zm200-320h80v-280h-80v280Zm120-60h80v-180h-80v180Zm-240-20h80v-160h-80v160Z"/>
    </Icon>
  );
});

IconMaterialMindfulnessFilled.displayName = 'OnesyIconMaterialMindfulnessFilled';

export default IconMaterialMindfulnessFilled;
