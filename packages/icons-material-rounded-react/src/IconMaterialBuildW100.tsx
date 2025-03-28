import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBuildW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildW100'

      short_name='Build'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-386q-89.17 0-151.58-62.42Q140-510.83 140-600q0-11.33 1.5-22.67Q143-634 145-645q2-8 7-11.5t12-5.5q7-2 13.5 0t11.5 7l109 107 108-108-106-107q-5-5-7-12.19-2-7.19 0-14t6-11.81q4-5 11-7 11-3 22-4.5t22-1.5q89.17 0 151.58 62.42Q568-689.17 568-600q0 29-6 53t-18 45l242 242q19 18.73 19 45.87Q805-187 786.21-168q-18.79 19-46 19T694-168L452-410q-23 11-47.02 17.5Q380.95-386 354-386Zm0-28q26.67 0 53.33-7.5Q434-429 457-445l257 257q11 11 26 11t26-11q11-11 11-26t-11-26L509-497q15-22 23-48.5t8-54.5q0-77-62-139t-160-45l107 107q9 9 9 21t-9 21L319-529q-9 9-21 9t-21-9L170-636q-14 109 49 165.5T354-414Zm112-76Z"/>
    </Icon>
  );
});

IconMaterialBuildW100.displayName = 'OnesyIconMaterialBuildW100';

export default IconMaterialBuildW100;
