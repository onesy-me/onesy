import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignItemsStretchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignItemsStretchFilled'

      short_name='AlignItemsStretch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240q-17 0-28.5-11.5T280-280v-400q0-17 11.5-28.5T320-720h40q17 0 28.5 11.5T400-680v400q0 17-11.5 28.5T360-240h-40Zm280 0q-17 0-28.5-11.5T560-280v-400q0-17 11.5-28.5T600-720h40q17 0 28.5 11.5T680-680v400q0 17-11.5 28.5T640-240h-40ZM120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm0-720q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H120Z"/>
    </Icon>
  );
});

IconMaterialAlignItemsStretchFilled.displayName = 'OnesyIconMaterialAlignItemsStretchFilled';

export default IconMaterialAlignItemsStretchFilled;
