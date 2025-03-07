import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRadioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioW100'

      short_name='Radio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-26 0-43-17t-17-43v-416q0-28 18.5-49.5T195-690l376-153q5-2 10.5.5t7.5 7.5q2 5-.5 10.5T581-817L214-668h554q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-272H160v272q0 12 10 22t22 10Zm120-72q33 0 56.5-23.5T392-312q0-33-23.5-56.5T312-392q-33 0-56.5 23.5T232-312q0 33 23.5 56.5T312-232ZM160-492h506v-58q0-6 4-10t10-4q6 0 10 4t4 10v58h106v-116q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v116Zm0 332v-304 304Z"/>
    </Icon>
  );
});

IconMaterialRadioW100.displayName = 'OnesyIconMaterialRadioW100';

export default IconMaterialRadioW100;
