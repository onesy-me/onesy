import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectCheckBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectCheckBoxW100'

      short_name='SelectCheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h483q6 0 10 4t4 10q0 6-4 10t-10 4H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9h496q14 0 23-9t9-23v-265q0-6 4-10t10-4q6 0 10 4t4 10v265q0 25-17.5 42.5T728-172H232Zm230-184 338-338q4-4 9.5-4t9.5 4q4 4 4 9.5t-4 9.5L482-338q-9 9-21 9t-21-9L302-476q-4-4-4.5-9.5T302-496q5-5 10-5t10 5l140 140Z"/>
    </Icon>
  );
});

IconMaterialSelectCheckBoxW100.displayName = 'OnesyIconMaterialSelectCheckBoxW100';

export default IconMaterialSelectCheckBoxW100;
