import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartDiamondFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamondFilled'

      short_name='LineStartDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-228 108-452q-12-12-12-28t12-28l224-224q12-12 28-12t28 12l212 212h240q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H600L388-228q-12 12-28 12t-28-12Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamondFilled.displayName = 'OnesyIconMaterialLineStartDiamondFilled';

export default IconMaterialLineStartDiamondFilled;
