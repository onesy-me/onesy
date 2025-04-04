import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInvertColorsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsW100'

      short_name='InvertColors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-112 0-190-76.5T212-435q0-57 21.5-103t56.5-84l159-155q7-7 15-10t16-3q8 0 16 3t15 10l159 155q35 38 56.5 85.5T748-435q0 110-78 186.5T480-172Zm0-28v-568L310-600q-35 33-52.5 75T240-435q0 97 70 166t170 69Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsW100.displayName = 'OnesyIconMaterialInvertColorsW100';

export default IconMaterialInvertColorsW100;
