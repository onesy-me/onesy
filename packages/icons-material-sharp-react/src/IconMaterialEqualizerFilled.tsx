import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqualizerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualizerFilled'

      short_name='Equalizer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z"/>
    </Icon>
  );
});

IconMaterialEqualizerFilled.displayName = 'OnesyIconMaterialEqualizerFilled';

export default IconMaterialEqualizerFilled;
