import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVariablesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariablesFilled'

      short_name='Variables'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-400h720v400H120Z"/>
    </Icon>
  );
});

IconMaterialVariablesFilled.displayName = 'OnesyIconMaterialVariablesFilled';

export default IconMaterialVariablesFilled;
