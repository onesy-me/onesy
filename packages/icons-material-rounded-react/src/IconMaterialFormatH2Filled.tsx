import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH2Filled'

      short_name='FormatH2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640v120h160v-120q0-17 11.5-28.5T400-680q17 0 28.5 11.5T440-640v320q0 17-11.5 28.5T400-280q-17 0-28.5-11.5T360-320v-120H200v120q0 17-11.5 28.5T160-280Zm400 0q-17 0-28.5-11.5T520-320v-120q0-33 23.5-56.5T600-520h160v-80H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h200q33 0 56.5 23.5T840-600v80q0 33-23.5 56.5T760-440H600v80h200q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280H560Z"/>
    </Icon>
  );
});

IconMaterialFormatH2Filled.displayName = 'OnesyIconMaterialFormatH2Filled';

export default IconMaterialFormatH2Filled;
