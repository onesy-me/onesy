import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAdd'

      short_name='SignalCellularAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-200h-80q-17 0-28.5-11.5T600-240q0-17 11.5-28.5T640-280h80v-80q0-17 11.5-28.5T760-400q17 0 28.5 11.5T800-360v80h80q17 0 28.5 11.5T920-240q0 17-11.5 28.5T880-200h-80v80q0 17-11.5 28.5T760-80q-17 0-28.5-11.5T720-120v-80ZM177-80q-18 0-29-12t-11-28q0-8 2.5-15t8.5-13l664-663q6-6 13-9t15-3q16 0 28 11t12 29v263q0 17-11.5 28.5T840-480q-17 0-28.5-11.5T800-520v-166L273-160h207q17 0 28.5 11.5T520-120q0 17-11.5 28.5T480-80H177Zm96-80 527-526q-76 76-138 137.5t-121.5 121L417-304 273-160Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAdd.displayName = 'OnesyIconMaterialSignalCellularAdd';

export default IconMaterialSignalCellularAdd;
