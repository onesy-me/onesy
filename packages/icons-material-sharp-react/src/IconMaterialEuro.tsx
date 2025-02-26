import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEuro = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Euro'

      short_name='Euro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-120q-118 0-210-67T260-360H120v-80h122q-3-24-2.5-44.5T242-520H120v-80h140q38-106 130-173t210-67q69 0 130.5 24.5T840-748l-57 56q-37-32-83.5-50T600-760q-85 0-152 44.5T347-600h253v80H323q-4 27-3 47.5t3 32.5h277v80H347q34 71 101 115.5T600-200q53 0 99.5-18t83.5-50l57 56q-48 43-109.5 67.5T600-120Z"/>
    </Icon>
  );
});

IconMaterialEuro.displayName = 'OnesyIconMaterialEuro';

export default IconMaterialEuro;
