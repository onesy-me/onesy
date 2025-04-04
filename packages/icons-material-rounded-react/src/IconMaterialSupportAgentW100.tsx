import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSupportAgentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupportAgentW100'

      short_name='SupportAgent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-172q-6 0-10-4t-4-10q0-6 4-10t10-4h234q13 0 22.5-8t9.5-21v-273q0-111-83-184.5T480-760q-114 0-197 73.5T200-502v208q0 6-4 10t-10 4q-22 0-38-14.5T132-331v-74q0-17 12-29.5t28-20.5v-48q0-61 25-113t67-90.5q42-38.5 98-60T480-788q62 0 118 21.5t98 60q42 38.5 67 90.5t25 113v47q15 7 27.5 18t12.5 28v85q0 17-12.5 28T788-279v50q0 24-17.5 40.5T728-172H494ZM380-424q-11 0-19.5-7.5T352-450q0-11 8.5-19t19.5-8q11 0 19.5 8t8.5 19q0 11-8.5 18.5T380-424Zm200 0q-11 0-19.5-7.5T552-450q0-11 8.5-19t19.5-8q11 0 19.5 8t8.5 19q0 11-8.5 18.5T580-424Zm-303-64q-5-85 56-144.5T482-692q74 0 131.5 43.5T684-533q-76-1-141.5-38T442-675q-14 66-58 115t-107 72Z"/>
    </Icon>
  );
});

IconMaterialSupportAgentW100.displayName = 'OnesyIconMaterialSupportAgentW100';

export default IconMaterialSupportAgentW100;
