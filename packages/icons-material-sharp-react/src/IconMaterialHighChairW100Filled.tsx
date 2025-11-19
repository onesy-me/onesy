import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighChairW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighChairW100Filled'

      short_name='HighChair'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m292-172 33-382-37-234h67q45 0 77.5 29t40.5 74l18 117h177v28h-69l32 368h-28l-6-74H326l-6 74h-28Zm37-102h265l-10-119H339l-10 119Zm12-147h241l-11-119H352l-11 119Z"/>
    </Icon>
  );
});

IconMaterialHighChairW100Filled.displayName = 'OnesyIconMaterialHighChairW100Filled';

export default IconMaterialHighChairW100Filled;
