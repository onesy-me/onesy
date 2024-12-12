import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestMultiRoomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMultiRoomW100Filled'

      short_name='NestMultiRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m212-574 268-202 268 202H212Zm0 402v-173h334v173H212Zm362 0v-173h174v173H574ZM212-373v-173h174v173H212Zm202 0v-173h334v173H414Z"/>
    </Icon>
  );
});

IconMaterialNestMultiRoomW100Filled.displayName = 'OnesyIconMaterialNestMultiRoomW100Filled';

export default IconMaterialNestMultiRoomW100Filled;
