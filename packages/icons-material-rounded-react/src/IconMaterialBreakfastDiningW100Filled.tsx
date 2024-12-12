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
      <path d="M240-172q-11 0-19.5-8.5T212-200v-372q-32-19-56-45.5T132-680q0-45 31.5-76.5T240-788h480q45 0 76.5 31.5T828-680q0 36-24 62.5T748-572v372q0 11-8.5 19.5T720-172H240Zm228-134q5 5 12 5t12-5l124-122q5-5 5-12t-5-12L492-576q-5-5-12-5t-12 5L346-452q-5 5-5 12t5 12l122 122Zm12-28L374-440l106-108 108 108-108 106Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDiningW100Filled.displayName = 'OnesyIconMaterialBreakfastDiningW100Filled';

export default IconMaterialBreakfastDiningW100Filled;
