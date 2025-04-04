import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeMaxDotsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxDotsFilled'

      short_name='HomeMaxDots'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-440q17 0 28.5-11.5T460-480q0-17-11.5-28.5T420-520q-17 0-28.5 11.5T380-480q0 17 11.5 28.5T420-440Zm-120 0q17 0 28.5-11.5T340-480q0-17-11.5-28.5T300-520q-17 0-28.5 11.5T260-480q0 17 11.5 28.5T300-440Zm240 0q17 0 28.5-11.5T580-480q0-17-11.5-28.5T540-520q-17 0-28.5 11.5T500-480q0 17 11.5 28.5T540-440Zm120 0q17 0 28.5-11.5T700-480q0-17-11.5-28.5T660-520q-17 0-28.5 11.5T620-480q0 17 11.5 28.5T660-440ZM280-200h-80q-66 0-113-47T40-360v-240q0-66 47-113t113-47h560q66 0 113 47t47 113v240q0 66-47 113t-113 47h-80q0 17-11.5 28.5T640-160H320q-17 0-28.5-11.5T280-200Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxDotsFilled.displayName = 'OnesyIconMaterialHomeMaxDotsFilled';

export default IconMaterialHomeMaxDotsFilled;
