import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlagCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagCheckFilled'

      short_name='FlagCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-680h250q-5 19-7.5 37.5T440-726q0 121 84 200.5T720-446q20 0 40-3t40-9v138H520l-16-80H280v280h-80Zm520-806q83 0 141.5 58.5T920-726q0 83-58.5 141.5T720-526q-83 0-141.5-58.5T520-726q0-83 58.5-141.5T720-926Zm-29 290 139-138-42-42-97 95-39-39-42 43 81 81Z"/>
    </Icon>
  );
});

IconMaterialFlagCheckFilled.displayName = 'OnesyIconMaterialFlagCheckFilled';

export default IconMaterialFlagCheckFilled;
