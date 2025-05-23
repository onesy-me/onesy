import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveUpW100'

      short_name='MoveUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M343-212q-98 0-168.5-65.5T104-440q0-100 79-163t184-66l-78-78q-5-5-5-10t4.78-9.78Q294-772 299.5-771.5q5.5.5 9.5 4.5l92 92q9 9 9 21t-9 21l-92 92q-5 5-10 5t-10.22-5q-4.78-5-4.28-10.5t4.5-9.5l80-80q-94 2-165.5 57.5T132-440q0 85 62.5 142.5T344-240h56q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-57Zm233.45-318q-13.45 0-21.95-8.63-8.5-8.62-8.5-21.37v-157.6q0-13.4 8.63-21.9 8.62-8.5 21.37-8.5h221.55q13.45 0 21.95 8.62 8.5 8.63 8.5 21.38v157.6q0 13.4-8.62 21.9-8.63 8.5-21.38 8.5H576.45Zm0 318q-13.45 0-21.95-8.63-8.5-8.62-8.5-21.37v-157.6q0-13.4 8.63-21.9 8.62-8.5 21.37-8.5h221.55q13.45 0 21.95 8.62 8.5 8.63 8.5 21.38v157.6q0 13.4-8.62 21.9-8.63 8.5-21.38 8.5H576.45ZM574-240h226v-162H574v162Z"/>
    </Icon>
  );
});

IconMaterialMoveUpW100.displayName = 'OnesyIconMaterialMoveUpW100';

export default IconMaterialMoveUpW100;
