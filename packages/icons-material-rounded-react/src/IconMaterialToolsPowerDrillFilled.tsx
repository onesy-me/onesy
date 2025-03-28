import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsPowerDrillFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPowerDrillFilled'

      short_name='ToolsPowerDrill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-560h180q12 0 21-9t9-21q0-12-9-21t-21-9H270q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-100h180q12 0 21-9t9-21q0-12-9-21t-21-9H270q-12 0-21 9t-9 21q0 12 9 21t21 9Zm410 140v-240h40q33 0 56.5 23.5T800-680h80q17 0 28.5 11.5T920-640q0 17-11.5 28.5T880-600h-80q0 33-23.5 56.5T720-520h-40ZM480-340H240v-100q-66 0-113-47T80-600v-80q0-66 47-113t113-47h320q33 0 56.5 23.5T640-760v240q0 33-23.5 56.5T560-440h-80v100ZM220-120q-25 0-42.5-17.5T160-180v-60q0-25 17.5-42.5T220-300h280q25 0 42.5 17.5T560-240v60q0 25-17.5 42.5T500-120H220Z"/>
    </Icon>
  );
});

IconMaterialToolsPowerDrillFilled.displayName = 'OnesyIconMaterialToolsPowerDrillFilled';

export default IconMaterialToolsPowerDrillFilled;
