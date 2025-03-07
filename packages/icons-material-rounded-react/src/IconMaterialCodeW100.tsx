import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeW100'

      short_name='Code'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m156-480 174 174q4 4 4.5 9.5T330-286q-5 5-10 5t-10-5L137-459q-5-5-7-10t-2-11q0-6 2-11t7-10l173-173q4-4 9.5-4.5T330-674q5 5 5 10t-5 10L156-480Zm648 0L630-654q-4-4-4.5-9.5T630-674q5-5 10-5t10 5l173 173q5 5 7 10t2 11q0 6-2 11t-7 10L650-286q-4 4-9.5 4.5T630-286q-5-5-5-10t5-10l174-174Z"/>
    </Icon>
  );
});

IconMaterialCodeW100.displayName = 'OnesyIconMaterialCodeW100';

export default IconMaterialCodeW100;
