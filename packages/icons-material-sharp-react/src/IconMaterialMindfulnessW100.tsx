import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMindfulnessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MindfulnessW100'

      short_name='Mindfulness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-132v-144q-57-52-88.5-115.5T172-520.72q0-128.04 89.83-217.66Q351.67-828 480-828q103 0 187.5 63.5T777-601l47 189H708v200H548v80h-28v-108h128q14 0 23-9t9-23v-168h108l-38-155q-23-92-99-148.5T480-800q-116 0-198 81.29T200-521q0 59.74 24.5 113.51T294-311.9l26 23.9v156h-28Zm202-334Zm-28 40h28v-228h-28v228Zm120-60h28v-128h-28v128Zm-240-20h28v-108h-28v108Z"/>
    </Icon>
  );
});

IconMaterialMindfulnessW100.displayName = 'OnesyIconMaterialMindfulnessW100';

export default IconMaterialMindfulnessW100;
