import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagicTetherFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicTetherFilled'

      short_name='MagicTether'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m254 710-84-85q59-59 138.5-94T480 496q92 0 171.5 34.5T790 625l-84 85q-44-44-102-69t-124-25q-66 0-124 25t-102 69ZM85 540 0 455q92-94 215-146.5T480 256q142 0 265 52.5T960 455l-85 85q-77-77-178-120.5T480 376q-116 0-217 43.5T85 540Zm395 436-50-110-110-50 110-50 50-110 50 110 110 50-110 50-50 110Z"/>
    </Icon>
  );
});

IconMaterialMagicTetherFilled.displayName = 'OnesyIconMaterialMagicTetherFilled';

export default IconMaterialMagicTetherFilled;
