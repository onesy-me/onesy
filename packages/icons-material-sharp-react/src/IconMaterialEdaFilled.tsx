import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdaFilled'

      short_name='Eda'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40v-280h218l136 181 247-247 94-57 106 79L597-40H120Zm160-440v-400h80v400h80v-440h80v440h80v-360h80v383L482-261 378-400H120v-400h80v320h80Z"/>
    </Icon>
  );
});

IconMaterialEdaFilled.displayName = 'OnesyIconMaterialEdaFilled';

export default IconMaterialEdaFilled;
