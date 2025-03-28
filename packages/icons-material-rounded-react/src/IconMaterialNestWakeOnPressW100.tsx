import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWakeOnPressW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressW100'

      short_name='NestWakeOnPress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-494q-11 0-19.5-8.5T772-522v-198q0-11 8.5-19.5T800-748q11 0 19.5 8.5T828-720v198q0 11-8.5 19.5T800-494ZM317-172q-6 0-11.5-2.5T295-182L143-333q-9-9-9-21t9-21l1-1q4-4 8.5-6t9.5 0l145 32v-390q0-20 14-34t34-14q20 0 34 14t14 34v212h42q4 0 7.5 1t6.5 3l123 54q30 14 42 45.5t6 64.5l-29 166q-2 10-9.5 16t-18.5 6H317Zm0-28h256l29-166q4-21-2.5-44T570-444l-125-56h-70v-240q0-9-5.5-14.5T355-760q-9 0-14.5 5.5T335-740v424l-173-38 155 154Zm0 0h253-253Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnPressW100.displayName = 'OnesyIconMaterialNestWakeOnPressW100';

export default IconMaterialNestWakeOnPressW100;
