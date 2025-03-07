import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRadioW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioW100Filled'

      short_name='Radio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-26 0-43-17t-17-43v-440q0-12 9.5-25.5T162-676l409-167q5-2 10.5.5t7.5 7.5q2 5-.5 10.5T581-817L214-668h554q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm120-100q33 0 56.5-23.5T392-312q0-33-23.5-56.5T312-392q-33 0-56.5 23.5T232-312q0 33 23.5 56.5T312-232ZM160-492h506v-58q0-6 4-10t10-4q6 0 10 4t4 10v58h106v-116q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v116Z"/>
    </Icon>
  );
});

IconMaterialRadioW100Filled.displayName = 'OnesyIconMaterialRadioW100Filled';

export default IconMaterialRadioW100Filled;
