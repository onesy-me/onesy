import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCodeBlocksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeBlocksW100'

      short_name='CodeBlocks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m316-480 77-77q4-4 4.5-9.5T393-577q-5-5-10-5t-10 5l-76 76q-5 5-7 10t-2 11q0 6 2 11t7 10l77 77q4 4 9.5 4.5T394-382q5-5 5-10t-5-10l-78-78Zm328 0-78 78q-4 4-4.5 9.5T566-382q5 5 10 5t10-5l77-77q5-5 7-10t2-11q0-6-2-11t-7-10l-77-77q-2-2-4.5-3t-5-1q-2.5 0-5.5 1t-5 3q-5 5-5 10t5 10l78 78ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialCodeBlocksW100.displayName = 'OnesyIconMaterialCodeBlocksW100';

export default IconMaterialCodeBlocksW100;
