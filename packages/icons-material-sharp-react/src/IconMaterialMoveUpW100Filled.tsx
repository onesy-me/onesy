import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveUpW100Filled'

      short_name='MoveUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M343-212q-98 0-168.5-65.5T104-440q0-100 79-163t184-66l-88-88 20-20 123 123-123 123-20-20 90-90q-94 2-165.5 57.5T132-440q0 85 62.5 142.5T344-240h70v28h-71Zm203-318v-218h282v218H546Zm0 318v-218h282v218H546Zm28-28h226v-162H574v162Z"/>
    </Icon>
  );
});

IconMaterialMoveUpW100Filled.displayName = 'OnesyIconMaterialMoveUpW100Filled';

export default IconMaterialMoveUpW100Filled;
