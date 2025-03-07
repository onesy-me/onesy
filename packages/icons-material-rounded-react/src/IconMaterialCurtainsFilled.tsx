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
      <path d="M160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560h40q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h40Zm169-280q68 45 105 123t44 157h4q7-79 44-157t105-123q-68-45-105-123t-44-157h-4q-7 79-44 157T329-480Z"/>
    </Icon>
  );
});

IconMaterialCurtainsFilled.displayName = 'OnesyIconMaterialCurtainsFilled';

export default IconMaterialCurtainsFilled;
