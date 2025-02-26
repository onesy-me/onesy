import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoFileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoFileFilled'

      short_name='VideoFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560q0 17 11.5 28.5T560-600h160L520-800v160ZM360-240h160q17 0 28.5-11.5T560-280v-40l51 27q10 5 19.5-1t9.5-17v-98q0-11-9.5-17t-19.5-1l-51 27v-40q0-17-11.5-28.5T520-480H360q-17 0-28.5 11.5T320-440v160q0 17 11.5 28.5T360-240Z"/>
    </Icon>
  );
});

IconMaterialVideoFileFilled.displayName = 'OnesyIconMaterialVideoFileFilled';

export default IconMaterialVideoFileFilled;
