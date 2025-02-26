import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlinesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlinesW100Filled'

      short_name='Airlines'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m150-236 367-488q8-11 21-17.5t27-6.5h190q29.06 0 47.03 22Q820-704 814-676l-90 440q-2 11-10.25 17.5T695-212H162q-8.87 0-12.93-8-4.07-8 .93-16Zm419-196q28.98 0 48.99-19.61 20.01-19.6 20.01-48Q638-528 617.99-548T569-568q-28.14 0-47.57 19.81T502-499.69q0 28.69 19.43 48.19Q540.86-432 569-432Z"/>
    </Icon>
  );
});

IconMaterialAirlinesW100Filled.displayName = 'OnesyIconMaterialAirlinesW100Filled';

export default IconMaterialAirlinesW100Filled;
