import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConditionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConditionsW100Filled'

      short_name='Conditions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-730q-26.4 0-45.2-18.8Q336-767.6 336-794q0-26.4 18.8-45.2Q373.6-858 400-858q26.4 0 45.2 18.8Q464-820.4 464-794q0 26.4-18.8 45.2Q426.4-730 400-730Zm260 506q48 0 82-34t34-82q0-48-34-82t-82-34q-48 0-82 34t-34 82q0 48 34 82t82 34Zm92-5q-20 16-43.35 24.5T660-196q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 25.3-8.5 48.65Q787-268 771-248l103 102q4 3.91 4 9.96 0 6.04-3.93 10.04-3.93 4-10 4T854-126L752-229Zm-302 13q6 11 13 20.5t15 18.5v57q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-96ZM350-358v238q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-509.88q-53.72-4.25-106.36-11.68Q163-649 110-660q-7-2-12-6.5t-3-11q2-6.5 8-9.5t13-1q70 16 141.17 23 71.18 7 142.83 7t142.83-7Q614-672 684-688q7-2 13.03.91 6.03 2.91 7.97 9.09 2 7-3 11.5t-12 6.5q-52.73 11.38-105.46 18.62T478-630v127q-26 29-42 66t-19 79h-67Z"/>
    </Icon>
  );
});

IconMaterialConditionsW100Filled.displayName = 'OnesyIconMaterialConditionsW100Filled';

export default IconMaterialConditionsW100Filled;
