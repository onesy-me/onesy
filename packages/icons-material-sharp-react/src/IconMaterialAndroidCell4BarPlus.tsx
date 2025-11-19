import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAndroidCell4BarPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidCell4BarPlus'

      short_name='AndroidCell4BarPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M60-160v-320h120v320H60Zm240 0v-420h120v420H300Zm480-319v-321h120v347q-27-16-57.5-22.5T780-479ZM540-160v-520h120v257q-28 27-44 64t-16 79q0 34 10.5 64.5T640-160H540Zm220 0v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialAndroidCell4BarPlus.displayName = 'OnesyIconMaterialAndroidCell4BarPlus';

export default IconMaterialAndroidCell4BarPlus;
