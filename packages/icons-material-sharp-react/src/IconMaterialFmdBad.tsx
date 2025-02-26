import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFmdBad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBad'

      short_name='FmdBad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-520h80v-200h-80v200Zm40 160q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm0 174q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
    </Icon>
  );
});

IconMaterialFmdBad.displayName = 'OnesyIconMaterialFmdBad';

export default IconMaterialFmdBad;
