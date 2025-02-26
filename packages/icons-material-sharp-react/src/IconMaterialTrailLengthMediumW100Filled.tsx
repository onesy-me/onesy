import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrailLengthMediumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthMediumW100Filled'

      short_name='TrailLengthMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-306v-28h259q-35-23-55-57.5T466-466H226v-28h240q3-36 22-71t57-61H306v-28h334q72.21 0 123.1 50.85 50.9 50.85 50.9 123T763.1-357q-50.89 51-123.1 51H286Zm-140 0v-28h100v28H146Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthMediumW100Filled.displayName = 'OnesyIconMaterialTrailLengthMediumW100Filled';

export default IconMaterialTrailLengthMediumW100Filled;
