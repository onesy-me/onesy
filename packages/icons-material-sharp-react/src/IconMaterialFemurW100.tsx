import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFemurW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemurW100'

      short_name='Femur'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-128q-25 0-44-16t-24-41q-7-39-32-61t-62-22q-5 0-10.5.5T213-266q-32 6-57-15t-25-53q0-25 16-44t41-24l140-24 145-208q12-18 10-36t-17-32q-8-8-11-17.5t-3-17.5q0-20 12.5-33t32.5-13q13 0 23.5 4.5T537-769q8 5 26 14t47 10q-8-23 1.5-45t31.5-30q23-8 45 2t30 33l50 140q8 23-2 44t-32 29q-23 9-44.5-2.5T660-608q-15-2-29.5 3.5T606-586L439-346l25 137q6 32-15 56.5T396-128Zm0-28q19 0 31.5-14.5T436-204l-24-133q-2-8 0-15.5t7-14.5l164-235q11-16 28.5-25t37.5-9l-29-80q-30 0-55-8t-45-22q-7-5-12.5-7t-10.5-2q-8 0-12.5 5.5T480-737q0 4 1.5 8t4.5 7q13 13 19 28t6 30q0 13-4 24t-11 22L353-413q-5 7-11.5 10.5T327-397l-134 23q-15 3-24.5 14.5T159-334q0 19 15 31.5t34 8.5q7-2 13.5-2H234q23 0 43.5 7.5T314-267q16 14 27 33t15 44q3 15 14.5 24.5T396-156Zm328-442q11-5 16.5-16t1.5-22l-50-140q-5-12-16-17.5t-23-.5q-11 5-17 16t-1 22l51 140q5 12 16 17.5t22 .5ZM462-485Zm226-211Z"/>
    </Icon>
  );
});

IconMaterialFemurW100.displayName = 'OnesyIconMaterialFemurW100';

export default IconMaterialFemurW100;
