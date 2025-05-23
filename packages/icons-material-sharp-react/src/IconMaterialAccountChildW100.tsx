import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountChildW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountChildW100'

      short_name='AccountChild'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.68-828q72.32 0 135.82 27.5T726-726q47 47 74.5 110.38Q828-552.24 828-479.68q0 71.68-27.5 135.18T726-234q-47 47-110.38 74.5Q552.24-132 479.68-132q-71.68 0-135.04-27.34-63.36-27.34-110.66-74.64t-74.64-110.66Q132-408 132-479.68q0-72.56 27.5-135.94Q187-679 234-726q47-47 110.61-74.5T479.68-828Zm.32 668q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm-64-480q0 27 18.5 45.5T480-576q27 0 45.5-18.5T544-640q0-27-18.5-45.5T480-704q-27 0-45.5 18.5T416-640Zm64 96q-42.4 0-93.2 20.8Q336-502.4 336-464v128q0 35.96 50.5 60.48Q437-251 496-256v-64.35q-27.42 1.61-51.71-4.02T400-342q3-18 28-30t52-12q27 0 53.5 12t26.5 30v72q34-11 49-29t15-37v-128q0-38.4-50.8-59.2Q522.4-544 480-544Zm-.14 144q-16.86 0-28.36-11.64t-11.5-28.5q0-16.86 11.64-28.36t28.5-11.5q16.86 0 28.36 11.64t11.5 28.5q0 16.86-11.64 28.36t-28.5 11.5Zm.14-80Z"/>
    </Icon>
  );
});

IconMaterialAccountChildW100.displayName = 'OnesyIconMaterialAccountChildW100';

export default IconMaterialAccountChildW100;
