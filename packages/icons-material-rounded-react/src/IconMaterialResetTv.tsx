import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResetTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTv'

      short_name='ResetTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-17 0-28.5-11.5T320-160v-40H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80q0 17-11.5 28.5T840-640q-17 0-28.5-11.5T800-680v-80H160v480h640v-200H512l46 46q11 11 11 28t-11 28q-11 11-28 11t-28-11L388-492q-12-12-12-28t12-28l114-114q11-11 28-11t28 11q11 11 11 28t-11 28l-46 46h288q33 0 56.5 23.5T880-480v200q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360Zm160-400Z"/>
    </Icon>
  );
});

IconMaterialResetTv.displayName = 'OnesyIconMaterialResetTv';

export default IconMaterialResetTv;
