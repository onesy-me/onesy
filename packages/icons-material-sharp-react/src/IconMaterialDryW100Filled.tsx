import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryW100Filled'

      short_name='Dry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M708-132H132v-365l366-237 27 31-95 159h318v28H532v100h296v28H532v100h256v28H532v100h176v28Zm-76-492q2-32-5.5-53.5T597-727q-26-32-35-60.5t-7-64.5h29q-2 32 5 54t33 57q22 30 31 57t7 60h-28Zm128 0q2-32-5.5-53.5T725-727q-26-32-35-60.5t-7-64.5h29q-2 32 5 54t33 57q22 30 31 57t7 60h-28Z"/>
    </Icon>
  );
});

IconMaterialDryW100Filled.displayName = 'OnesyIconMaterialDryW100Filled';

export default IconMaterialDryW100Filled;
