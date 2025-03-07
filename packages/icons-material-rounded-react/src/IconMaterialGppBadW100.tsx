import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGppBadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppBadW100'

      short_name='GppBad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-464 74 74q4 4 9.5 4.5T574-390q5-5 5-10t-5-10l-74-74 74-74q4-4 4.5-9.5T574-578q-5-5-10-5t-10 5l-74 74-74-74q-4-4-9.5-4.5T386-578q-5 5-5 10t5 10l74 74-74 74q-4 4-4.5 9.5T386-390q5 5 10 5t10-5l74-74Zm0 325q-5 0-11-1t-11-3q-113-45-179.5-148.5T212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 121-66.5 224.5T502-143q-5 2-11 3t-11 1Zm0-25q104-33 172-132t68-220v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-208 77q-10 4-15.5 12t-5.5 18v167q0 121 68 220t172 132Zm0-314Z"/>
    </Icon>
  );
});

IconMaterialGppBadW100.displayName = 'OnesyIconMaterialGppBadW100';

export default IconMaterialGppBadW100;
