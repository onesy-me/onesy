import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlindW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindW100'

      short_name='Blind'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M459-776q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Zm228 274q0 6-4 10t-10 4h-36l174 388q2 5 .5 10.5T805-82q-5 2-11 0t-8-7L602-499q-45-15-81-47t-71-90q-24 60-34 112.5t-5 88.5l80 147v198q0 6-4 10t-10 4q-6 0-10-4t-4-10v-183L361-415l-2 160L225-88q-4 5-9 6t-10-3q-5-4-5.5-9.5T204-105l126-160-22-161q-8-48 1-109t31-115l-119 73v117q0 6-4 10t-10 4q-6 0-10-4t-4-10v-116q0-8 3.5-15t10.5-11l147-89q17-11 30.5-15t27.5-4q16 0 27.5 7.5T462-677l33 54q31 51 78 79t100 28q6 0 10 4t4 10Z"/>
    </Icon>
  );
});

IconMaterialBlindW100.displayName = 'OnesyIconMaterialBlindW100';

export default IconMaterialBlindW100;
