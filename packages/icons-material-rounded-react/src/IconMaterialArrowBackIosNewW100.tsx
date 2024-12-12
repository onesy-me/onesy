import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackIosNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewW100'

      short_name='ArrowBackIosNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m344-480 313 313q7 7 7 17t-7 17q-7 7-17 7t-17-7L318-438q-9-9-13-20t-4-22q0-11 4-22t13-20l305-305q7-7 17-7t17 7q7 7 7 17t-7 17L344-480Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosNewW100.displayName = 'OnesyIconMaterialArrowBackIosNewW100';

export default IconMaterialArrowBackIosNewW100;
