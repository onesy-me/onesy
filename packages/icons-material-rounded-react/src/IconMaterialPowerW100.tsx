import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerW100'

      short_name='Power'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M448-200h64v-86l128-128v-154q0-12-10-22t-22-10H352q-12 0-22 10t-10 22v154l128 128v86Zm-28-2v-72L310-384q-8-8-13-19.28-5-11.28-5-23.72v-140.78q0-24.84 17.63-42.53Q327.25-628 352-628h52l-14 14v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h124v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v160l-14-14h52q24.75 0 42.38 17.69Q668-592.63 668-567.79v140.75q0 12.04-5 23.54T650-384L540-274v72q0 12.75-8.62 21.37Q522.75-172 510-172h-60q-12.75 0-21.37-8.63Q420-189.25 420-202Zm60-198Z"/>
    </Icon>
  );
});

IconMaterialPowerW100.displayName = 'OnesyIconMaterialPowerW100';

export default IconMaterialPowerW100;
