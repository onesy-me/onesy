import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WashW100'

      short_name='Wash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M713.9-639q-28.9 0-51.4-22.59-22.5-22.6-22.5-51.48Q640-739 657-772t57-81q40 48 57 81t17 58.93q0 28.88-22.6 51.48Q742.8-639 713.9-639ZM708-132H132v-365l366-237 27 31-95 159h318v28H381l106-178-327 212v322h548v28ZM532-388v-28h296v28H532Zm0 128v-28h256v28H532ZM346-427Z"/>
    </Icon>
  );
});

IconMaterialWashW100.displayName = 'OnesyIconMaterialWashW100';

export default IconMaterialWashW100;
