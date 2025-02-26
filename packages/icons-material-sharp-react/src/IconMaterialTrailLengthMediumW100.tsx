import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrailLengthMediumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthMediumW100'

      short_name='TrailLengthMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-306v-28h259q-35-23-55-57.5T466-466H226v-28h240q3-36 22-71t57-61H306v-28h334q72.21 0 123.1 50.85 50.9 50.85 50.9 123T763.1-357q-50.89 51-123.1 51H286Zm354-28q60 0 103-43t43-103q0-60-43-103t-103-43q-60 0-103 43t-43 103q0 60 43 103t103 43Zm-494 28v-28h100v28H146Zm494-174Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthMediumW100.displayName = 'OnesyIconMaterialTrailLengthMediumW100';

export default IconMaterialTrailLengthMediumW100;
