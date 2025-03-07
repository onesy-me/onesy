import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSupportAgentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupportAgentW100Filled'

      short_name='SupportAgent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172v-28h280v-302q0-111-83-184.5T480-760q-114 0-197 73.5T200-502v223h-68v-176h40v-47.74Q171-564 195.5-616q24.5-52 67-90.5t98.54-60q56.04-21.5 119-21.5T599-766.5q56 21.5 98 60t66.5 90.5Q788-564 788-503.25V-455h40v176h-40v107H480ZM380-424q-11 0-19.5-7.46-8.5-7.47-8.5-18.5 0-11.04 8.5-19.04t19.5-8q11 0 19.5 7.76T408-450q0 11.05-8.5 18.52Q391-424 380-424Zm200 0q-11 0-19.5-7.46-8.5-7.47-8.5-18.5 0-11.04 8.5-19.04t19.5-8q11 0 19.5 7.76T608-450q0 11.05-8.5 18.52Q591-424 580-424Zm-303-64q-5-85 56-144.5T482.06-692q73.94 0 131.44 43.5T684-533q-76-1-141.5-38T442-675q-14 66-58 115t-107 72Z"/>
    </Icon>
  );
});

IconMaterialSupportAgentW100Filled.displayName = 'OnesyIconMaterialSupportAgentW100Filled';

export default IconMaterialSupportAgentW100Filled;
