import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineWeightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightFilled'

      short_name='LineWeight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-40h720v40H120Zm0-120v-80h720v80H120Zm0-160v-120h720v120H120Zm0-200v-160h720v160H120Z"/>
    </Icon>
  );
});

IconMaterialLineWeightFilled.displayName = 'OnesyIconMaterialLineWeightFilled';

export default IconMaterialLineWeightFilled;
