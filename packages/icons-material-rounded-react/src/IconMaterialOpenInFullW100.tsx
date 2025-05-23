import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullW100'

      short_name='OpenInFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-172q-12.75 0-21.37-8.63Q172-189.25 172-202v-224q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v207l541-541H534q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h224q12.75 0 21.38 8.62Q788-770.75 788-758v224q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-207L219-200h207q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H202Z"/>
    </Icon>
  );
});

IconMaterialOpenInFullW100.displayName = 'OnesyIconMaterialOpenInFullW100';

export default IconMaterialOpenInFullW100;
