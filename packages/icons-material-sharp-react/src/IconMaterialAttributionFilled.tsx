import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttributionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttributionFilled'

      short_name='Attribution'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M430-200h100v-180h60v-240H370v240h60v180Zm50 120q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-560q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Z"/>
    </Icon>
  );
});

IconMaterialAttributionFilled.displayName = 'OnesyIconMaterialAttributionFilled';

export default IconMaterialAttributionFilled;
