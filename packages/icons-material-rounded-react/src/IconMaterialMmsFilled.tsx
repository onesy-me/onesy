import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMmsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsFilled'

      short_name='Mms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400h400q12 0 18-11t-2-21L586-579q-6-8-16-8t-16 8L450-440l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Zm-40 160-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Z"/>
    </Icon>
  );
});

IconMaterialMmsFilled.displayName = 'OnesyIconMaterialMmsFilled';

export default IconMaterialMmsFilled;
