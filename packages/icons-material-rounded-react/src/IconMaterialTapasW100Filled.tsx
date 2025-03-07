import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTapasW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapasW100Filled'

      short_name='Tapas'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M299.96-60Q294-60 290-64.03q-4-4.02-4-9.97v-372h-86q-31.08 0-52.54-21.44Q126-488.89 126-519.94q0-31.06 21.46-52.56Q168.92-594 200-594h86v-52h-86q-31.08 0-52.54-21.44Q126-688.89 126-719.94q0-31.06 21.46-52.56Q168.92-794 200-794h86v-92q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v92h86q31.08 0 52.54 21.44Q474-751.11 474-720.06q0 31.06-21.46 52.56Q431.08-646 400-646h-86v52h86q31.08 0 52.54 21.44Q474-551.11 474-520.06q0 31.06-21.46 52.56Q431.08-446 400-446h-86v372q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM686-88v-338q-50-13-85-48.5T566-560v-310q0-12.75 8.63-21.38Q583.25-900 596-900h208q12.75 0 21.38 8.62Q834-882.75 834-870v310q0 50-35 85.5T714-426v338h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H620q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h66Zm-92-606h212v-178H594v178Z"/>
    </Icon>
  );
});

IconMaterialTapasW100Filled.displayName = 'OnesyIconMaterialTapasW100Filled';

export default IconMaterialTapasW100Filled;
