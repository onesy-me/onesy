import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyCenter'

      short_name='AlignJustifyCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-17 0-28.5-11.5T440-120v-720q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v720q0 17-11.5 28.5T480-80Zm160-200q-17 0-28.5-11.5T600-320v-320q0-17 11.5-28.5T640-680h40q17 0 28.5 11.5T720-640v320q0 17-11.5 28.5T680-280h-40Zm-360 0q-17 0-28.5-11.5T240-320v-320q0-17 11.5-28.5T280-680h40q17 0 28.5 11.5T360-640v320q0 17-11.5 28.5T320-280h-40Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyCenter.displayName = 'OnesyIconMaterialAlignJustifyCenter';

export default IconMaterialAlignJustifyCenter;
