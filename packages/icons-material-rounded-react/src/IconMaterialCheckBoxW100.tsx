import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxW100'

      short_name='CheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-388 320-492q-4-4-9.5-4.5T300-492q-5 5-5 10t5 10l103 103q9 9 21 9t21-9l217-217q4-4 4.5-9.5T662-606q-5-5-10-5t-10 5L424-388ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxW100.displayName = 'OnesyIconMaterialCheckBoxW100';

export default IconMaterialCheckBoxW100;
