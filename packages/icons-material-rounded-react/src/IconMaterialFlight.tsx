import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flight'

      short_name='Flight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 377-91q-14 4-25.5-4.5T340-118q0-12 3-19.5t8-11.5l69-51v-220l-291 86q-19 5-34-6t-15-31q0-15 5-25t14-15l321-189v-220q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v220l321 189q9 5 14 15t5 25q0 20-15 31t-34 6l-291-86v220l69 51q5 4 8 11.5t3 19.5q0 14-11.5 22.5T583-91l-103-29Z"/>
    </Icon>
  );
});

IconMaterialFlight.displayName = 'OnesyIconMaterialFlight';

export default IconMaterialFlight;
