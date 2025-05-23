import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElderlyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElderlyW100'

      short_name='Elderly'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m297-57-22-17 135-171-22-161q-8-50 1-110.5T420-629l-119 71v132h-28v-148l160-97q16-9 29-14t24-5q20 0 36.5 14.5T557-631q32 54 60.5 82t71.5 56q6-11 17.5-17t25.5-6q23 0 38 15t15 37v408h-28v-408q0-10-7-17t-17-7q-10 0-17 7t-7 17v19h-28v-19q-53-35-83.5-65T533-617q-24 51-35.5 106t-6.5 96l80 147v212h-28v-197L441-395l-2 160L297-57Zm242-699q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialElderlyW100.displayName = 'OnesyIconMaterialElderlyW100';

export default IconMaterialElderlyW100;
