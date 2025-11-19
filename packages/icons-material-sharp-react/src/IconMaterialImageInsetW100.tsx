import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageInsetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageInsetW100'

      short_name='ImageInset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-340h440v-280H260v280Zm92-74 68-91 44 59 60-80 84 112H352ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialImageInsetW100.displayName = 'OnesyIconMaterialImageInsetW100';

export default IconMaterialImageInsetW100;
