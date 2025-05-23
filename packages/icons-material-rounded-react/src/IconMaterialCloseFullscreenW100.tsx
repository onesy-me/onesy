import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloseFullscreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenW100'

      short_name='CloseFullscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M452-433 160-141q-4 4-9 3.5t-9-4.5q-4-4-4-9.67 0-5.66 4-9.33l291-291H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h224q12.75 0 21.38 8.62Q480-462.75 480-450v224q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-207Zm75-75h207q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H510q-12.75 0-21.37-8.63Q480-497.25 480-510v-224q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v207l292-292q3.67-4 9.33-4 5.67 0 9.67 4t4 9.67q0 5.66-4 9.33L527-508Z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreenW100.displayName = 'OnesyIconMaterialCloseFullscreenW100';

export default IconMaterialCloseFullscreenW100;
