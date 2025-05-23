import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMindfulnessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MindfulnessW100Filled'

      short_name='Mindfulness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.04-426q5.96 0 9.96-4.02 4-4.03 4-9.98v-200q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v200q0 5.95 4.04 9.98 4.03 4.02 10 4.02Zm120-60q5.96 0 9.96-4.02 4-4.03 4-9.98v-100q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v100q0 5.95 4.04 9.98 4.03 4.02 10 4.02Zm-240-20q5.96 0 9.96-4.02 4-4.03 4-9.98v-80q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v80q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM306-132q-5.95 0-9.98-4.02Q292-140.05 292-146v-130q-57-52-88.5-115.5T172-520.72q0-128.04 89.83-217.66Q351.67-828 480-828q103 0 187.5 63.5T777-601l38.32 151.92Q819-435 810-423.5q-9 11.5-24 11.5h-78v140q0 24.75-17.62 42.37Q672.75-212 648-212H548v66q0 5.95-4.03 9.98Q539.95-132 534-132H306Z"/>
    </Icon>
  );
});

IconMaterialMindfulnessW100Filled.displayName = 'OnesyIconMaterialMindfulnessW100Filled';

export default IconMaterialMindfulnessW100Filled;
