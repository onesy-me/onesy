import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirW100'

      short_name='Air'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-198q-32 0-56.5-19.5T370-266h30q8 18 24 29t36 11q27 0 46.5-19.5T526-292q0-27-19.5-46.5T460-358H106v-28h354q39 0 66.5 27.5T554-292q0 39-27.5 66.5T460-198ZM106-574v-28h514q36 0 61-25t25-61q0-36-25-61t-61-25q-30 0-52 17t-30 43h-30q9-39 40-63.5t72-24.5q48 0 81 33t33 81q0 48-33 81t-81 33H106Zm660 306v-30q26-8 43-30t17-52q0-36-25-61t-61-25H106v-28h634q48 0 81 33t33 81q0 41-24.5 72T766-268Z"/>
    </Icon>
  );
});

IconMaterialAirW100.displayName = 'OnesyIconMaterialAirW100';

export default IconMaterialAirW100;
