import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBreakfastDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakfastDiningW100Filled'

      short_name='BreakfastDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-400q-32-19-56-45.5T132-680q0-45 31.5-76.5T240-788h480q45 0 76.5 31.5T828-680q0 36-24 62.5T748-572v400H212Zm268-122 148-146-148-148-146 148 146 146Zm0-40L374-440l106-108 108 108-108 106Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDiningW100Filled.displayName = 'OnesyIconMaterialBreakfastDiningW100Filled';

export default IconMaterialBreakfastDiningW100Filled;
