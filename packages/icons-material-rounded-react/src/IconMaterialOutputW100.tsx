import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputW100'

      short_name='Output'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v34q0 6-4 10t-10 4q-6 0-10-4t-4-10v-34q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h496q12 0 22-10t10-22v-34q0-6 4-10t10-4q6 0 10 4t4 10v34q0 26-17 43t-43 17H232Zm542-294H394q-6 0-10-4t-4-10q0-6 4-10t10-4h380L655-615q-4-4-4-9t4-9q4-4 9.5-4t9.5 4l133 132q5 5 7 10t2 11q0 6-2 11t-7 10L674-326q-4 4-9.5 3.5T655-327q-4-4-4-9t4-9l119-121Z"/>
    </Icon>
  );
});

IconMaterialOutputW100.displayName = 'OnesyIconMaterialOutputW100';

export default IconMaterialOutputW100;
