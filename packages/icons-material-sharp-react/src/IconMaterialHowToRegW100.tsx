import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHowToRegW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToRegW100'

      short_name='HowToReg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M129-232v-52q0-30 14.5-45.5T179-356q51-26 96-39t122-13q30 0 51.5 1.5T485-402l-26 26q-11-2-27.5-3t-34.5-1q-71 0-119.5 14T193-332q-21 11-28.5 22t-7.5 26v24h230l28 28H129Zm480 52L507-282l20-20 82 82 202-202 20 20-222 222ZM397-512q-44.55 0-76.27-31.72Q289-575.45 289-620t31.73-76.28Q352.45-728 397-728t76.27 31.72Q505-664.55 505-620t-31.73 76.28Q441.55-512 397-512Zm-10 252Zm10-280q33 0 56.5-23.5T477-620q0-33-23.5-56.5T397-700q-33 0-56.5 23.5T317-620q0 33 23.5 56.5T397-540Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialHowToRegW100.displayName = 'OnesyIconMaterialHowToRegW100';

export default IconMaterialHowToRegW100;
