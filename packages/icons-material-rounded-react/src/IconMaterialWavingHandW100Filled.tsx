import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWavingHandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavingHandW100Filled'

      short_name='WavingHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M642-104q-6 0-10.5-4t-4.5-10q0-6 4.5-10t10.5-4q78-1 131.5-55T828-318q0-6 4-10.5t10-4.5q6 0 10 4.5t4 10.5q0 90-62 152t-152 62ZM118-627q-6 0-10-4t-4-10q0-90 62.5-152.5T318-856q6 0 10.5 4t4.5 10q0 6-4.5 10t-10.5 4q-78 1-131.5 55T132-642q0 6-4 10.5t-10 4.5Zm115 392q-77-77-76.5-184T235-604l73-73q8-8 20-8t20 8q20 20 22 47.5T353-583l-38 37q-9 9-9 21.5t9 21.5l5 5q45 45 24.5 85.5T290-338q-4 4-4.5 10t4.5 10q4 4 10 4t10-4q44-43 64-94.5T340-518l-6-7 47-47q8-10 12-20.5t6-22.5l152-153q5-5 10-5t10 5q5 5 5 10t-5 10L404-581l71 71 223-224q5-5 10-5t10 5q5 5 5 10t-5 10L494-491l71 71 196-195q5-5 10-5t10 5q5 5 5 10t-5 10L585-400l72 72 133-132q5-5 10-5t10 5q5 5 5 10t-5 10L604-235q-78 78-185.5 78T233-235Z"/>
    </Icon>
  );
});

IconMaterialWavingHandW100Filled.displayName = 'OnesyIconMaterialWavingHandW100Filled';

export default IconMaterialWavingHandW100Filled;
