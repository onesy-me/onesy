import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriceChangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeW100Filled'

      short_name='PriceChange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm234-162H280q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h66v26q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-26h52q11.9 0 19.95-8.05Q454-362.1 454-374v-92q0-11.9-8.05-19.95Q437.9-494 426-494H294v-92h146q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4h-66v-26q0-5.95-4.11-9.97-4.1-4.03-10.18-4.03-5.71 0-9.71 4-4 4-4 10v26h-52q-11.9 0-19.95 8.05Q266-597.9 266-586v92q0 11.9 8.05 19.95Q282.1-466 294-466h132v92Zm219 45 38-38q4-4 2.13-8.5-1.88-4.5-7.13-4.5h-76.24q-4.76 0-6.76 4.5t2 8.5l37.97 37.97Q637-327 639.91-327q2.91 0 5.09-2Zm-43-241h76.24q4.76 0 6.76-4.5t-2-8.5l-37.97-37.97Q643-623 640.09-623q-2.91 0-5.09 2l-38 38q-4 4-2.12 8.5 1.87 4.5 7.12 4.5Z"/>
    </Icon>
  );
});

IconMaterialPriceChangeW100Filled.displayName = 'OnesyIconMaterialPriceChangeW100Filled';

export default IconMaterialPriceChangeW100Filled;
