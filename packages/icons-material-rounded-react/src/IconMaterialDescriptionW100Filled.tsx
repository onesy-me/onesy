import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDescriptionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionW100Filled'

      short_name='Description'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-266h240q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm0-160h240q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm-88 294q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12.44 0 23.72 5T604-810l126 126q8 8 13 19.28 5 11.28 5 23.72v449q0 26-17 43t-43 17H272Zm300-549.6q0 12.58 8.51 21.09T601.6-652H720L572-800v118.4Z"/>
    </Icon>
  );
});

IconMaterialDescriptionW100Filled.displayName = 'OnesyIconMaterialDescriptionW100Filled';

export default IconMaterialDescriptionW100Filled;
