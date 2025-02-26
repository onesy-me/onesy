import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiversity1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diversity1Filled'

      short_name='Diversity1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-80q-17 0-28.5-11.5T0-120v-23q0-31 23-54t63-34q26-8 47-9t45 1q10 1 14.5 9.5t.5 17.5q-7 16-10 32.5t-3 34.5v25q0 17-11.5 28.5T140-80H40Zm240 0q-17 0-28.5-11.5T240-120v-25q0-65 66.5-105T480-290q108 0 174 40t66 105v25q0 17-11.5 28.5T680-80H280Zm540 0q-17 0-28.5-11.5T780-120v-25q0-18-3-34.5T767-212q-4-9 .5-17.5T782-239q24-2 45-1t47 9q40 11 63 34t23 54v23q0 17-11.5 28.5T920-80H820ZM160-280q-33 0-56.5-23.5T80-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-280Zm640 0q-33 0-56.5-23.5T720-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-280Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-440q0 50-34.5 85T480-320Zm0-420q39-47 96-73.5T696-840q110 0 187 77t77 187q0 19-2.5 37.5T950-502q-5 17-19 27t-31 5q-16-4-24.5-18t-3.5-30q4-14 6-28.5t2-29.5q0-77-53.5-130.5T696-760q-55 0-100 30.5T515-657q-14 17-35 17t-35-17q-35-42-80.5-72.5T264-760q-77 0-130.5 53.5T80-576q0 15 2 29.5t6 28.5q4 15-4.5 28.5T60-472q-17 5-31-4t-19-26q-5-18-7.5-36.5T0-576q0-110 77-187t187-77q63 0 120 26.5t96 73.5Z"/>
    </Icon>
  );
});

IconMaterialDiversity1Filled.displayName = 'OnesyIconMaterialDiversity1Filled';

export default IconMaterialDiversity1Filled;
