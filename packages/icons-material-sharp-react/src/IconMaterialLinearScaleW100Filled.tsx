import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLinearScaleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinearScaleW100Filled'

      short_name='LinearScale'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M688-316q-65 0-110-41t-54-109H266q-5 27-25.5 46.5T188-400q-33 0-56.5-23.5T108-480q0-33 23.5-56.5T188-560q32 0 52.5 19.5T266-494h258q9-68 54-109t110-41q68 0 116 49t48 117q0 66-48 114t-116 48Zm0-28q56 0 96-40t40-96q0-56-40-96t-96-40q-56 0-96 40t-40 96q0 56 40 96t96 40Z"/>
    </Icon>
  );
});

IconMaterialLinearScaleW100Filled.displayName = 'OnesyIconMaterialLinearScaleW100Filled';

export default IconMaterialLinearScaleW100Filled;
