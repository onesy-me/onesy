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
      <path d="M520-172q-58 0-112-21.5T310-254l21-20q40 35 86.5 54.5T520-200q117 0 198.5-81.5T800-480q0-116-82-198t-198-82q-116 0-198 82t-82 198v70l90-90 20 19-124 124-124-124 20-19 90 91v-71q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120q0 128-90 218t-218 90ZM406-332v-188h40v-46q0-31 21.5-52.5T520-640q31 0 52.5 21.5T594-566v46h40v188H406Zm68-188h92v-46q0-19-13.5-32.5T520-612q-19 0-32.5 13.5T474-566v46Z"/>
    </Icon>
  );
});

IconMaterialLockResetW100.displayName = 'OnesyIconMaterialLockResetW100';

export default IconMaterialLockResetW100;
