import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicOffW100Filled'

      short_name='MicOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m657-442-22-24q3-8 5.5-22.5T643-520h28q0 26-4 44.5T657-442ZM511-588 375-726v-34q0-29 19.5-48.5T443-828q29 0 48.5 19.5T511-760v172Zm-82 442v-144q-91-8-152.5-73.5T215-520h28q0 83 58.5 141.5T443-320q46 0 85.5-19t67.5-52l20 20q-29 34-70 55t-89 26v144h-28Zm370-2L85-862l20-20 714 714-20 20Z"/>
    </Icon>
  );
});

IconMaterialMicOffW100Filled.displayName = 'OnesyIconMaterialMicOffW100Filled';

export default IconMaterialMicOffW100Filled;
