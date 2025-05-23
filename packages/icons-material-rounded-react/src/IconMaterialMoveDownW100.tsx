import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveDownW100'

      short_name='MoveDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-520q0 88 71.5 143.5T369-319l-80-80q-4-4-4.5-9.5t4.28-10.5q5.22-5 10.22-5 5 0 10 5l92 92q9 9 9 21t-9 21l-92 92q-4 4-9.5 4.5t-10.72-4.72Q284-198 284-203q0-5 5-10l78-78q-105-3-184-66t-79-163q0-97 70.5-162.5T343-748h57q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-56q-87 0-149.5 57.5T132-520Zm444.45 308q-13.45 0-21.95-8.63-8.5-8.62-8.5-21.37v-157.6q0-13.4 8.63-21.9 8.62-8.5 21.37-8.5h221.55q13.45 0 21.95 8.62 8.5 8.63 8.5 21.38v157.6q0 13.4-8.62 21.9-8.63 8.5-21.38 8.5H576.45Zm0-318q-13.45 0-21.95-8.63-8.5-8.62-8.5-21.37v-157.6q0-13.4 8.63-21.9 8.62-8.5 21.37-8.5h221.55q13.45 0 21.95 8.62 8.5 8.63 8.5 21.38v157.6q0 13.4-8.62 21.9-8.63 8.5-21.38 8.5H576.45ZM574-558h226v-162H574v162Z"/>
    </Icon>
  );
});

IconMaterialMoveDownW100.displayName = 'OnesyIconMaterialMoveDownW100';

export default IconMaterialMoveDownW100;
