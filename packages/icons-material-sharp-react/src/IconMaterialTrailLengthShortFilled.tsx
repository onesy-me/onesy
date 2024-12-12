import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrailLengthShortFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShortFilled'

      short_name='TrailLengthShort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-280q-73 0-127.5-45.5T404-440H160v-80h244q5-23 13.5-43t22.5-37H240v-80h360q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Zm-320 0v-80h120v80H280Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthShortFilled.displayName = 'OnesyIconMaterialTrailLengthShortFilled';

export default IconMaterialTrailLengthShortFilled;
