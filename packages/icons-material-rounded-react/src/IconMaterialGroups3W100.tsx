import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroups3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups3W100'

      short_name='Groups3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m188-397 60-60-60-60-60 60 60 60Zm524-9 62-100 63 100H712Zm-231.65-22Q448-428 425-450.75T402-506q0-33.15 22.75-55.58Q447.5-584 480-584q33.15 0 55.58 22.32Q558-539.35 558-506.35 558-474 535.68-451q-22.33 23-55.33 23ZM480-556q-20 0-35 14.37-15 14.38-15 35.63 0 20 15 35t35.5 15q20.5 0 35-15t14.5-35.5q0-20.5-14.37-35Q501.25-556 480-556Zm0 50ZM52-288q0-35 37.55-58.5 37.56-23.5 97.48-23.5 10.97 0 20.97 1 10 1 19 3-7 14-11 29.11t-4 32.19v42.7H78q-11.05 0-18.53-7.48Q52-276.95 52-288Zm240-4v-9q0-45 52.17-71t136.11-26q84.72 0 136.22 26t51.5 71v9q0 12.75-8.62 21.37Q650.75-262 638-262H322.41q-13.41 0-21.91-8.63-8.5-8.62-8.5-21.37Zm482-78q60.3 0 97.15 23.5Q908-323 908-288q0 11.05-7.47 18.52Q893.05-262 882-262H748v-42.86q0-17.14-3.5-32.14T734-366q9-2 19.19-3 10.18-1 20.81-1Zm-294.12 0Q409-370 364.5-351T320-301v11h320v-11q0-31-44-50t-116.12-19Zm.12 80Z"/>
    </Icon>
  );
});

IconMaterialGroups3W100.displayName = 'OnesyIconMaterialGroups3W100';

export default IconMaterialGroups3W100;
