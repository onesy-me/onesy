import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqualizer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Equalizer'

      short_name='Equalizer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z"/>
    </Icon>
  );
});

IconMaterialEqualizer.displayName = 'OnesyIconMaterialEqualizer';

export default IconMaterialEqualizer;
