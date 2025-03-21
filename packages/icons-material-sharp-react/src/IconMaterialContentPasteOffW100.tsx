import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentPasteOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteOffW100'

      short_name='ContentPasteOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m788-284-28-28v-448H628v80H392L284-788h139q4-20 19.5-34t37.5-14q22 0 37.5 14t19.5 34h251v504ZM480.18-748q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM720-200 200-720v520h520Zm-548 28v-576l-46-46 20-20 668 668-20 20-46-46H172Z"/>
    </Icon>
  );
});

IconMaterialContentPasteOffW100.displayName = 'OnesyIconMaterialContentPasteOffW100';

export default IconMaterialContentPasteOffW100;
