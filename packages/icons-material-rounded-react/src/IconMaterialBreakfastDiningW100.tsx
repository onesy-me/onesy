import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBreakfastDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakfastDiningW100'

      short_name='BreakfastDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-172q-11 0-19.5-8.5T212-200v-372q-32-19-56-45.5T132-680q0-45 31.5-76.5T240-788h480q45 0 76.5 31.5T828-680q0 36-24 62.5T748-572v372q0 11-8.5 19.5T720-172H240Zm0-28h480v-388l16-10q24-15 44-34.5t20-47.5q0-33-23.5-56.5T720-760H240q-33 0-56.5 23.5T160-680q0 28 20 47.5t44 34.5l16 10v388Zm228-106q5 5 12 5t12-5l124-122q5-5 5-12t-5-12L492-576q-5-5-12-5t-12 5L346-452q-5 5-5 12t5 12l122 122Zm12-28L374-440l106-108 108 108-108 106Zm0-146Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDiningW100.displayName = 'OnesyIconMaterialBreakfastDiningW100';

export default IconMaterialBreakfastDiningW100;
