import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalShadesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesFilled'

      short_name='VerticalShades'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h80v-640h640v640h80v80H80Zm320-80h160v-560H400v560Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesFilled.displayName = 'OnesyIconMaterialVerticalShadesFilled';

export default IconMaterialVerticalShadesFilled;
