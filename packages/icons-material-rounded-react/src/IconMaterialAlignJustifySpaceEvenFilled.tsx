import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifySpaceEvenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceEvenFilled'

      short_name='AlignJustifySpaceEven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-280q-17 0-28.5-11.5T560-320v-320q0-17 11.5-28.5T600-680h40q17 0 28.5 11.5T680-640v320q0 17-11.5 28.5T640-280h-40Zm-280 0q-17 0-28.5-11.5T280-320v-320q0-17 11.5-28.5T320-680h40q17 0 28.5 11.5T400-640v320q0 17-11.5 28.5T360-280h-40ZM840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80Zm-720 0q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceEvenFilled.displayName = 'OnesyIconMaterialAlignJustifySpaceEvenFilled';

export default IconMaterialAlignJustifySpaceEvenFilled;
