import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDinnerDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DinnerDiningFilled'

      short_name='DinnerDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-120-80-80h800l-80 80H160Zm-40-120q6-18 16-34t24-30v-296h-40v-60h40v-30h-40v-60h40v-30h-40v-60h360v90h360v60H480v90H320v244q14 2 28 6t26 12q26-65 83-103.5T583-480q90 0 153.5 61.5T800-268v28H120Zm200-510h80v-30h-80v30Zm0 90h80v-30h-80v30Zm-100-90h40v-30h-40v30Zm0 90h40v-30h-40v30Zm0 314q10-5 19.5-7.5T260-358v-242h-40v254Z"/>
    </Icon>
  );
});

IconMaterialDinnerDiningFilled.displayName = 'OnesyIconMaterialDinnerDiningFilled';

export default IconMaterialDinnerDiningFilled;
