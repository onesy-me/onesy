import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricMeter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMeter'

      short_name='ElectricMeter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-122v-60q-106-37-173-129.5T120-522q0-75 28.5-140.5t77-114q48.5-48.5 114-77T479-882q74 0 140 28.5t115 77q49 48.5 77.5 114T840-522q0 118-67.5 209.5T600-183v61q0 17-11.5 28.5T560-82q-17 0-28.5-11.5T520-122v-42q-10 2-20 2h-21q-10 0-19.5-.5T440-164v42q0 17-11.5 28.5T400-82q-17 0-28.5-11.5T360-122Zm120-118q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82ZM360-600h240q17 0 28.5-11.5T640-640q0-17-11.5-28.5T600-680H360q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600Zm80 210-20 20q-13 13-13 30t13 30q13 13 30 13t30-13l62-62q12-12 12-28t-12-28l-22-22 20-20q13-13 13-30t-13-30q-13-13-30-13t-30 13l-62 62q-12 12-12 28t12 28l22 22Zm40-130Z"/>
    </Icon>
  );
});

IconMaterialElectricMeter.displayName = 'OnesyIconMaterialElectricMeter';

export default IconMaterialElectricMeter;
