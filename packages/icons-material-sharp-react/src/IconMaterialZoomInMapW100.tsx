import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZoomInMapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomInMapW100'

      short_name='ZoomInMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m182-162-20-20 150-150H172v-28h188v188h-28v-140L182-162Zm596 0L628-312v140h-28v-188h188v28H648l150 150-20 20ZM172-600v-28h140L162-778l20-20 150 150v-140h28v188H172Zm428 0v-188h28v140l150-150 20 20-150 150h140v28H600Z"/>
    </Icon>
  );
});

IconMaterialZoomInMapW100.displayName = 'OnesyIconMaterialZoomInMapW100';

export default IconMaterialZoomInMapW100;
