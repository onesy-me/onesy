import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttributionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttributionW100'

      short_name='Attribution'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-596q-50 0-67 11t-17 29v132.53q0 6.47 4.5 10.97Q405-408 411-408h35v126q0 14.28 9.8 24.14 9.81 9.86 24 9.86 14.2 0 24.2-9.86T514-282v-126h35q6 0 10.5-4.5T564-423v-133q0-18-17-29t-67-11Zm-.32 464q-71.68 0-135.04-27.34-63.36-27.34-110.66-74.64t-74.64-110.66Q132-408 132-479.68q0-72.56 27.5-135.94Q187-679 234-726q47-47 110.61-74.5T479.68-828q72.32 0 135.82 27.5T726-726q47 47 74.5 110.38Q828-552.24 828-479.68q0 71.68-27.5 135.18T726-234q-47 47-110.38 74.5Q552.24-132 479.68-132Zm.32-28q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-464q18 0 31-13t13-31q0-18-13-31t-31-13q-18 0-31 13t-13 31q0 18 13 31t31 13Zm0 144Z"/>
    </Icon>
  );
});

IconMaterialAttributionW100.displayName = 'OnesyIconMaterialAttributionW100';

export default IconMaterialAttributionW100;
