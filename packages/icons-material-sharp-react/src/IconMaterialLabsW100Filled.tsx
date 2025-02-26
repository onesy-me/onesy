import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabsW100Filled'

      short_name='Labs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-68.89 0-117.45-47Q314-226 314-294v-364h-62v-170h456v170h-63v379q-6 63-53.5 105T480-132Zm0-28q57.08 0 97.04-38.5Q617-237 617-294v-39H487v-28h130v-124H487v-28h130v-145H342v364q0 57 40.25 95.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialLabsW100Filled.displayName = 'OnesyIconMaterialLabsW100Filled';

export default IconMaterialLabsW100Filled;
