import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WashW100Filled'

      short_name='Wash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M708-132H132v-365l366-237 27 31-95 159h318v28H532v100h296v28H532v100h256v28H532v100h176v28Zm5.9-507q-28.9 0-51.4-22.59-22.5-22.6-22.5-51.48Q640-739 657-772t57-81q40 48 57 81t17 58.93q0 28.88-22.6 51.48Q742.8-639 713.9-639Z"/>
    </Icon>
  );
});

IconMaterialWashW100Filled.displayName = 'OnesyIconMaterialWashW100Filled';

export default IconMaterialWashW100Filled;
