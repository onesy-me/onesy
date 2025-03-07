import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileCopy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopy'

      short_name='FileCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-200H320q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h247q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v367q0 33-23.5 56.5T760-200Zm0-440H620q-25 0-42.5-17.5T560-700v-140H320v560h440v-360ZM160-40q-33 0-56.5-23.5T80-120v-520q0-17 11.5-28.5T120-680q17 0 28.5 11.5T160-640v520h400q17 0 28.5 11.5T600-80q0 17-11.5 28.5T560-40H160Zm160-800v200-200 560-560Z"/>
    </Icon>
  );
});

IconMaterialFileCopy.displayName = 'OnesyIconMaterialFileCopy';

export default IconMaterialFileCopy;
