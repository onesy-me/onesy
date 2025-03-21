import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyFlexStart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexStart'

      short_name='AlignJustifyFlexStart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Zm440-200q-17 0-28.5-11.5T520-320v-320q0-17 11.5-28.5T560-680h40q17 0 28.5 11.5T640-640v320q0 17-11.5 28.5T600-280h-40Zm-240 0q-17 0-28.5-11.5T280-320v-320q0-17 11.5-28.5T320-680h40q17 0 28.5 11.5T400-640v320q0 17-11.5 28.5T360-280h-40Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexStart.displayName = 'OnesyIconMaterialAlignJustifyFlexStart';

export default IconMaterialAlignJustifyFlexStart;
