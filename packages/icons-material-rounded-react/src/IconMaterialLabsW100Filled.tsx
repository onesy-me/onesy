import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabsW100Filled'

      short_name='Labs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-68.89 0-117.45-47Q314-226 314-294v-364q-26 0-44-17.5T252-719v-47q0-25.58 18.21-43.79T314-828h331q25.99 0 44.49 18.21Q708-791.58 708-766v47q0 26-18.51 43.5Q670.99-658 645-658v379q-6 63-53.5 105T480-132Zm0-28q57.08 0 97.04-38.5Q617-237 617-294v-39H501q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h116v-124H501q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h116v-145H342v364q0 57 40.25 95.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialLabsW100Filled.displayName = 'OnesyIconMaterialLabsW100Filled';

export default IconMaterialLabsW100Filled;
