import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInputFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputFilled'

      short_name='Input'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-200h80v120h640v-480H160v120H80v-200h800v640H80Zm380-140-56-58 83-82H80v-80h407l-83-82 56-58 180 180-180 180Z"/>
    </Icon>
  );
});

IconMaterialInputFilled.displayName = 'OnesyIconMaterialInputFilled';

export default IconMaterialInputFilled;
