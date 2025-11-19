import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrickW100'

      short_name='Brick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-391h111v-145h177v145h120v-145h177v145h111v391H132Zm28-28h640v-335H160v335Zm111-363h121v-117H271v117Zm297 0h121v-117H568v117ZM160-240h640-640Zm111-363h121-121Zm297 0h121-121Z"/>
    </Icon>
  );
});

IconMaterialBrickW100.displayName = 'OnesyIconMaterialBrickW100';

export default IconMaterialBrickW100;
