import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastFilled'

      short_name='Cast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-120q50 0 85 35t35 85H80Zm200 0q0-83-58.5-141.5T80-360v-80q117 0 198.5 81.5T360-160h-80Zm160 0q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80Zm160 0q0-109-40.5-203.5t-111-165Q378-599 283-639.5T80-680v-120h800v640H600Z"/>
    </Icon>
  );
});

IconMaterialCastFilled.displayName = 'OnesyIconMaterialCastFilled';

export default IconMaterialCastFilled;
