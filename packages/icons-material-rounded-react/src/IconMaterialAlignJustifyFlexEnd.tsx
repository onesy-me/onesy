import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyFlexEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexEnd'

      short_name='AlignJustifyFlexEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80ZM600-280q-17 0-28.5-11.5T560-320v-320q0-17 11.5-28.5T600-680h40q17 0 28.5 11.5T680-640v320q0 17-11.5 28.5T640-280h-40Zm-240 0q-17 0-28.5-11.5T320-320v-320q0-17 11.5-28.5T360-680h40q17 0 28.5 11.5T440-640v320q0 17-11.5 28.5T400-280h-40Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexEnd.displayName = 'OnesyIconMaterialAlignJustifyFlexEnd';

export default IconMaterialAlignJustifyFlexEnd;
