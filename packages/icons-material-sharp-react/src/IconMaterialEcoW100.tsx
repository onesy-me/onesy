import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEcoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcoW100'

      short_name='Eco'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-212.5q-38-38.5-59-87.72T172-402q0-53 20.5-106t65.5-98q39-39 99.5-60.5T486-697q68-9 136.5-9.5T746-704q4 54 3.5 122.5T739-445q-10 68-31.5 128.5T648-218q-44 45-95.5 65.5T449.74-132Q396-132 343-153q-53-21-91-59.5Zm54 8.5q32 22 70.5 33t73.5 11q46.68 0 92.34-18Q588-196 628-238q17.81-18 36.12-50.5t31.67-85q13.36-52.5 20.28-127Q723-575 720-678q-49-2-111.5-.5t-125 11Q421-658 366.5-639T280-588q-44 44-62 92.5T200-406q0 53 21.5 101t56.5 77q20-68 67.5-130.5T488-480q-68 59-113 123t-69 153Zm0 0Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialEcoW100.displayName = 'OnesyIconMaterialEcoW100';

export default IconMaterialEcoW100;
