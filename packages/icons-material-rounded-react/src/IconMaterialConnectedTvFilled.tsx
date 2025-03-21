import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConnectedTvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTvFilled'

      short_name='ConnectedTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40H160Zm80-120q17 0 28.5-11.5T280-360q0-17-11.5-28.5T240-400q-17 0-28.5 11.5T200-360q0 17 11.5 28.5T240-320Zm251 0q12 0 20.5-8.5T520-349q0-121-85-206t-206-85q-12 0-20.5 8.5T200-611q0 12 8.5 20.5T229-582q97 0 165 68t68 165q0 12 8.5 20.5T491-320Zm-120 0q12 0 20.5-8.5T400-349q0-71-50-121t-121-50q-12 0-20.5 8.5T200-491q0 12 8.5 20.5T229-462q47 0 80 33t33 80q0 12 8.5 20.5T371-320Z"/>
    </Icon>
  );
});

IconMaterialConnectedTvFilled.displayName = 'OnesyIconMaterialConnectedTvFilled';

export default IconMaterialConnectedTvFilled;
