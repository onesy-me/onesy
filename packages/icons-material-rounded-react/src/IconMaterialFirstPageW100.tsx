import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFirstPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageW100'

      short_name='FirstPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M279.96-266q-5.96 0-9.96-4.02-4-4.03-4-9.98v-400q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v400q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM516-480l174 174q4 4 4.5 9.5T690-286q-5 5-10 5t-10-5L497-459q-5-5-7-10.13-2-5.14-2-11 0-5.87 2-10.87 2-5 7-10l173-173q4-4 9.5-4.5T690-674q5 5 5 10t-5 10L516-480Z"/>
    </Icon>
  );
});

IconMaterialFirstPageW100.displayName = 'OnesyIconMaterialFirstPageW100';

export default IconMaterialFirstPageW100;
