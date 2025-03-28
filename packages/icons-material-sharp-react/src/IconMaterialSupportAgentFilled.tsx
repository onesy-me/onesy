import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSupportAgentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupportAgentFilled'

      short_name='SupportAgent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244H80v-229h40l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 54h40v229h-40v120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"/>
    </Icon>
  );
});

IconMaterialSupportAgentFilled.displayName = 'OnesyIconMaterialSupportAgentFilled';

export default IconMaterialSupportAgentFilled;
