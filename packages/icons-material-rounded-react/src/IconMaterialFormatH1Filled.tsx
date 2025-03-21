import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH1Filled'

      short_name='FormatH1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280q-17 0-28.5-11.5T200-320v-320q0-17 11.5-28.5T240-680q17 0 28.5 11.5T280-640v120h160v-120q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v320q0 17-11.5 28.5T480-280q-17 0-28.5-11.5T440-320v-120H280v120q0 17-11.5 28.5T240-280Zm480 0q-17 0-28.5-11.5T680-320v-280h-40q-17 0-28.5-11.5T600-640q0-17 11.5-28.5T640-680h80q17 0 28.5 11.5T760-640v320q0 17-11.5 28.5T720-280Z"/>
    </Icon>
  );
});

IconMaterialFormatH1Filled.displayName = 'OnesyIconMaterialFormatH1Filled';

export default IconMaterialFormatH1Filled;
