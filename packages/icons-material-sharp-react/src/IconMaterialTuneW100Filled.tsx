import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTuneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TuneW100Filled'

      short_name='Tune'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-146v-188h28v80h320v28H494v80h-28Zm-320-80v-28h188v28H146Zm160-160v-80H146v-28h160v-80h28v188h-28Zm160-80v-28h348v28H466Zm160-160v-188h28v80h160v28H654v80h-28Zm-480-80v-28h348v28H146Z"/>
    </Icon>
  );
});

IconMaterialTuneW100Filled.displayName = 'OnesyIconMaterialTuneW100Filled';

export default IconMaterialTuneW100Filled;
