import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH3'

      short_name='FormatH3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640v120h160v-120q0-17 11.5-28.5T400-680q17 0 28.5 11.5T440-640v320q0 17-11.5 28.5T400-280q-17 0-28.5-11.5T360-320v-120H200v120q0 17-11.5 28.5T160-280Zm400 0q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h200v-80H640q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520h120v-80H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h200q33 0 56.5 23.5T840-600v240q0 33-23.5 56.5T760-280H560Z"/>
    </Icon>
  );
});

IconMaterialFormatH3.displayName = 'OnesyIconMaterialFormatH3';

export default IconMaterialFormatH3;
