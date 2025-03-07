import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAddFilled'

      short_name='SignalCellularAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-80q-17 0-28.5-11.5T720-120v-80h-80q-17 0-28.5-11.5T600-240q0-17 11.5-28.5T640-280h80v-80q0-17 11.5-28.5T760-400q17 0 28.5 11.5T800-360v80h80q17 0 28.5 11.5T920-240q0 17-11.5 28.5T880-200h-80v80q0 17-11.5 28.5T760-80Zm-583 0q-18 0-29.5-12T136-120q0-8 3-15t9-13l663-663q6-6 13-9t15-3q16 0 28 11.5t12 29.5v276q0 18-15.5 27.5T831-475q-17-5-35-7.5t-36-2.5q-102 0-173.5 71.5T515-240q0 31 6.5 58.5T542-128q9 17 .5 32.5T517-80H177Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAddFilled.displayName = 'OnesyIconMaterialSignalCellularAddFilled';

export default IconMaterialSignalCellularAddFilled;
