import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBalanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalanceW100Filled'

      short_name='Balance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-172q-6 0-10-4t-4-10q0-6 4-10t10-4h320v-441q-29-4-51.5-25T387-720H246l107 273q4 9 4 18.5t-2 18.5q-9 34-42.5 52T246-340q-33 0-66.5-18T137-410q-2-9-2-18.5t4-18.5l107-273h-60q-6 0-10-4t-4-10q0-6 4-10t10-4h201q5-33 30.5-56.5T480-828q37 0 62.5 23.5T573-748h201q6 0 10 4t4 10q0 6-4 10t-10 4h-60l107 273q4 9 4 18.5t-2 18.5q-9 34-42.5 52T714-340q-33 0-66.5-18T605-410q-2-9-2-18.5t4-18.5l107-273H573q-5 33-27.5 54T494-641v441h320q6 0 10 4t4 10q0 6-4 10t-10 4H146Zm486-262h164l-82-209-82 209Zm-468 0h164l-82-209-82 209Zm316-234q27 0 46.5-19.5T546-734q0-27-19.5-46.5T480-800q-27 0-46.5 19.5T414-734q0 27 19.5 46.5T480-668Z"/>
    </Icon>
  );
});

IconMaterialBalanceW100Filled.displayName = 'OnesyIconMaterialBalanceW100Filled';

export default IconMaterialBalanceW100Filled;
