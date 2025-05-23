import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEntW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EntW100Filled'

      short_name='Ent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-132q-5.95 0-9.98-4.02Q292-140.05 292-146v-130q-57-52-88.5-115.5T172-520.72q0-128.04 89.83-217.66Q351.67-828 480-828q103 0 187.5 63.5T777-601l38.32 151.92Q819-435 810-423.5q-9 11.5-24 11.5h-78v140q0 24.75-17.62 42.37Q672.75-212 648-212H548v66q0 5.95-4.03 9.98Q539.95-132 534-132H423l22-214h115q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H448l12-112q2-26 20.73-43T525-546h119q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H526q-36.82 0-63.45 24.4Q435.92-525.2 432-489l-37 357h-89Z"/>
    </Icon>
  );
});

IconMaterialEntW100Filled.displayName = 'OnesyIconMaterialEntW100Filled';

export default IconMaterialEntW100Filled;
