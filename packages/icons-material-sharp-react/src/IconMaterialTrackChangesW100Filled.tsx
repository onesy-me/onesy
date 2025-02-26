import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrackChangesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackChangesW100Filled'

      short_name='TrackChanges'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.4-135.73 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q407.79-828 480-828h14v324q8 5 11 10.77t3 13.35q0 10.88-8.5 19.38Q491-452 480-452t-19.5-8.5q-8.5-8.5-8.5-19.26 0-7.5 3-13.37 3-5.87 11-10.87v-135q-62 5-104 50.5T320-480q0 66 47 113t113 47q66 0 113-47t47-113q0-36-14.5-66.5T586-600l20-20q29 26 45.5 62.02T668-480q0 78.33-54.76 133.17-54.77 54.83-133 54.83Q402-292 347-346.83 292-401.67 292-480q0-75 50.5-128.5T466-667v-133q-128 5-217 97.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-69-27-129t-74-104l20-20q51 48 80 112.89 29 64.9 29 139.81 0 72.3-27.39 135.86-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialTrackChangesW100Filled.displayName = 'OnesyIconMaterialTrackChangesW100Filled';

export default IconMaterialTrackChangesW100Filled;
