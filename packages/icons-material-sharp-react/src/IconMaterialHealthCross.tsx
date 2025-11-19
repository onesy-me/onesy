import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthCross = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthCross'

      short_name='HealthCross'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-200H120v-320h200v-200h320v200h200v320H640v200H320Zm80-80h160v-200h200v-160H560v-200H400v200H200v160h200v200Zm80-280Z"/>
    </Icon>
  );
});

IconMaterialHealthCross.displayName = 'OnesyIconMaterialHealthCross';

export default IconMaterialHealthCross;
