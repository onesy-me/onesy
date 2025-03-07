import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenstrualHealthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenstrualHealthW100Filled'

      short_name='MenstrualHealth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M244-251q-5 5-12.5 5.5T219-250q-42-48-64.5-107T132-480v-216q0-19 16.5-27t31.5 3l130 98q8 6 10 15.5t-3 17.5q-30 54-54.5 110.5T238-360q0 20 3.5 39.5T251-282q4 11 1 18.5t-8 12.5Zm236 105q-89 0-151.5-62.5T266-360q0-67 48-168t129-207q14-18 37-18.5t37 18.5q81 106 129 207t48 168q0 89-62.5 151.5T480-146Zm234-103q-6-5-8.5-13.5T709-282q6-19 9.5-38.5T722-360q0-62-25-118.5T643-589q-5-8-3-17.5t10-15.5l130-98q15-11 31.5-3t16.5 27v216q0 64-22.5 123T741-250q-5 6-13 6t-14-5Z"/>
    </Icon>
  );
});

IconMaterialMenstrualHealthW100Filled.displayName = 'OnesyIconMaterialMenstrualHealthW100Filled';

export default IconMaterialMenstrualHealthW100Filled;
