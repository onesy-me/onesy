import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRawOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOn'

      short_name='RawOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-390v-180q0-13 8.5-21.5T150-600h110q24 0 42 18t18 42v40q0 18-9.5 32.5T284-444l20 46q6 14-2 26t-24 12q-8 0-15-4t-10-12l-29-64h-44v50q0 13-8.5 21.5T150-360q-13 0-21.5-8.5T120-390Zm239-6 42-167q4-17 17-27t30-10h24q17 0 30 10t17 27l42 167q4 14-5 25t-23 11q-11 0-18.5-6.5T505-383l-9-37h-70l-10 38q-2 10-10 16t-19 6q-14 0-23-11t-5-25Zm255 14-45-182q-4-14 5-25t23-11q10 0 18.5 6t10.5 16l24 98 25-98q2-10 10-16t18-6h14q10 0 18.5 6t10.5 16l24 98 25-98q2-10 10-16t18-6q14 0 23 11t5 25l-46 182q-2 10-10 16t-18 6h-14q-10 0-18-6t-10-16l-25-100-25 100q-2 10-10 16t-18 6h-14q-10 0-18.5-6T614-382Zm-174-98h40l-10-40h-20l-10 40Zm-260-20h80v-40h-80v40Z"/>
    </Icon>
  );
});

IconMaterialRawOn.displayName = 'OnesyIconMaterialRawOn';

export default IconMaterialRawOn;
