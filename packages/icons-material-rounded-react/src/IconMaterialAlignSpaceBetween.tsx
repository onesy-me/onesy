import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignSpaceBetween = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceBetween'

      short_name='AlignSpaceBetween'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h160v-80q0-17 11.5-28.5T320-280h320q17 0 28.5 11.5T680-240v80h160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm200-600q-17 0-28.5-11.5T280-720v-80H120q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H680v80q0 17-11.5 28.5T640-680H320Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceBetween.displayName = 'OnesyIconMaterialAlignSpaceBetween';

export default IconMaterialAlignSpaceBetween;
