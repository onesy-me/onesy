import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelfPositionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfPositionFilled'

      short_name='ShelfPosition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-120h720v120q0 33-23.5 56.5T760-120H200Zm460-280v-440h100q33 0 56.5 23.5T840-760v360H660Zm-540 0v-360q0-33 23.5-56.5T200-840h100v440H120Zm260 0v-440h200v440H380Z"/>
    </Icon>
  );
});

IconMaterialShelfPositionFilled.displayName = 'OnesyIconMaterialShelfPositionFilled';

export default IconMaterialShelfPositionFilled;
