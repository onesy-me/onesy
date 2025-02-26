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
      <path d="m299-183-20-20 88-88q-105-3-184-66t-79-163q0-97 70.5-162.5T343-748h71v28h-70q-87 0-149.5 57.5T132-520q0 88 71.5 143.5T369-319l-90-90 20-20 123 123-123 123Zm247-29v-218h282v218H546Zm0-318v-218h282v218H546Zm28-28h226v-162H574v162Z"/>
    </Icon>
  );
});

IconMaterialMoveDownW100.displayName = 'OnesyIconMaterialMoveDownW100';

export default IconMaterialMoveDownW100;
