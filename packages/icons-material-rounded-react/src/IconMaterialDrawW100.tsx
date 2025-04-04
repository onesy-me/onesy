import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDrawW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawW100'

      short_name='Draw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-172q-13 0-21.5-8.5T212-202v-24q0-12 5-23.5t13-19.5l511-511q5-5 10-6.5t10-1.5q5 0 10.5 1.5t9.5 6.5l39 39q5 4 6.5 9.5T828-721q0 5-1.5 10t-6.5 10L309-190q-8 8-19.5 13t-23.5 5h-24Zm-2-28h39l431-431-19-20-20-19-431 431v39Zm560-521-39-39 39 39Zm-109 70-20-19 39 39-19-20ZM574-172q64 0 119-30t55-84q0-30-20-55.5T669-384q-5-2-10.5 1t-7.5 8q-2 5 1 10.5t8 7.5q29 13 44.5 31.5T720-286q0 37-43 61.5T574-200q-6 0-10 4t-4 10q0 6 4 10t10 4ZM412-694q0 23-23.5 41.5T299-605q-73 32-100 56t-27 55q0 23 14 39.5t33 27.5q5 3 10 1t8-7q3-5 1-10.5t-7-8.5q-16-10-23.5-20.5T200-494q0-20 23.5-39t86.5-46q76-32 103-57.5t27-57.5q0-40-37.5-67T306-788q-35 0-68 13t-47 32q-4 5-3.5 10.5t5.5 9.5q5 3 10 2.5t9-4.5q17-17 41-26t53-9q49 0 77.5 19.5T412-694Z"/>
    </Icon>
  );
});

IconMaterialDrawW100.displayName = 'OnesyIconMaterialDrawW100';

export default IconMaterialDrawW100;
