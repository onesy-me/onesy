import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockResetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockResetW100'

      short_name='LockReset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M519.91-172q-53.91 0-104.95-18.68Q363.92-209.37 322-243q-5.2-4-5.6-10-.4-6 4.6-11t11.5-4.5q6.5.5 11.5 5.5 38 30 81.5 46.5T520-200q117 0 198.5-81.5T800-480q0-116-82-198t-198-82q-116 0-198 82t-82 198v70l81-81q3.75-4 9.38-4 5.62 0 9.62 4 5 4 4.5 10t-4.5 10l-93 93q-9 9-21 9t-21-9l-93-93q-4-4-4.5-10t4-10q4.5-4 10.5-3.5t10 4.5l80 81v-71q0-64.08 24-120.04Q260-656 302-698q42-42 97.94-66 55.95-24 120-24Q584-788 640-764t98 66q42 42 66 97.93 24 55.94 24 119.98Q828-352 738.14-262t-218.23 90ZM440-332q-14.45 0-24.23-9.77Q406-351.55 406-366v-120q0-14.45 11.5-24.23Q429-520 446-520v-46q0-30.53 21.74-52.26Q489.48-640 520-640q30.53 0 52.26 21.74Q594-596.53 594-566v46q17 0 28.5 9.77Q634-500.45 634-486v120q0 14.45-9.78 24.23Q614.45-332 600-332H440Zm34-188h92v-45.61q0-19.39-13.5-32.89T520-612q-19 0-32.5 13.5T474-565.61V-520Z"/>
    </Icon>
  );
});

IconMaterialLockResetW100.displayName = 'OnesyIconMaterialLockResetW100';

export default IconMaterialLockResetW100;
