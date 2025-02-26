import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVillaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaW100'

      short_name='Villa'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-432l428-165v341h76q0-23.1 16.43-39.55Q708.86-484 731.93-484t39.57 16.45Q788-451.1 788-428v256H172Zm28-28h212v-228h160v-301L200-585v385Zm240 0h132v-84h56v84h132v-200H440v200Zm-56-256Zm216 256Zm0-28Z"/>
    </Icon>
  );
});

IconMaterialVillaW100.displayName = 'OnesyIconMaterialVillaW100';

export default IconMaterialVillaW100;
