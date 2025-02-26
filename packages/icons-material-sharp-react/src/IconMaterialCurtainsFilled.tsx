import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurtainsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsFilled'

      short_name='Curtains'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h80v-640h640v640h80v80H80Zm249-360q68 45 105 123t44 157h4q7-79 44-157t105-123q-68-45-105-123t-44-157h-4q-7 79-44 157T329-480Z"/>
    </Icon>
  );
});

IconMaterialCurtainsFilled.displayName = 'OnesyIconMaterialCurtainsFilled';

export default IconMaterialCurtainsFilled;
