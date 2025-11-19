import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageInsetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageInsetW100Filled'

      short_name='ImageInset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-340h440v-280H260v280Zm92-74 68-91 44 59 60-80 84 112H352ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialImageInsetW100Filled.displayName = 'OnesyIconMaterialImageInsetW100Filled';

export default IconMaterialImageInsetW100Filled;
