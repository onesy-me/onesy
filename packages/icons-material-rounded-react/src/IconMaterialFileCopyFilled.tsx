import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileCopyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyFilled'

      short_name='FileCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-200H320q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h247q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v367q0 33-23.5 56.5T760-200Zm0-440L560-840v140q0 25 17.5 42.5T620-640h140ZM160-40q-33 0-56.5-23.5T80-120v-520q0-17 11.5-28.5T120-680q17 0 28.5 11.5T160-640v520h400q17 0 28.5 11.5T600-80q0 17-11.5 28.5T560-40H160Z"/>
    </Icon>
  );
});

IconMaterialFileCopyFilled.displayName = 'OnesyIconMaterialFileCopyFilled';

export default IconMaterialFileCopyFilled;
