import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectCheckBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectCheckBoxFilled'

      short_name='SelectCheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h499q17 0 28.5 11.5T739-800q0 17-11.5 28.5T699-760H200v560h560v-260q0-17 11.5-28.5T800-500q17 0 28.5 11.5T840-460v260q0 33-23.5 56.5T760-120H200Zm261-272 340-340q11-11 27-11t28 11q12 11 12 28t-12 29L489-308q-12 12-28 12t-28-12L263-478q-11-11-11-28t11-28q11-11 28-11t28 11l142 142Z"/>
    </Icon>
  );
});

IconMaterialSelectCheckBoxFilled.displayName = 'OnesyIconMaterialSelectCheckBoxFilled';

export default IconMaterialSelectCheckBoxFilled;
