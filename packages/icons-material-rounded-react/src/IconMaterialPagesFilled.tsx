import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPagesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesFilled'

      short_name='Pages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-261 77 46q11 7 21.5-.5T586-356l-20-87 68-59q10-9 6-21.5T622-537l-89-7-35-83q-5-12-18-12t-18 12l-35 83-89 7q-14 1-18 13.5t6 21.5l68 59-20 87q-3 13 7.5 20.5t21.5.5l77-46Z"/>
    </Icon>
  );
});

IconMaterialPagesFilled.displayName = 'OnesyIconMaterialPagesFilled';

export default IconMaterialPagesFilled;
