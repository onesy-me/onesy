import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMergeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeFilled'

      short_name='Merge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-344 284-148q-11 11-27.5 11.5T228-148q-11-11-11-28t11-28l165-166q23-23 35-52t12-61v-204l-36 36q-11 11-27.5 11T348-652q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11.5 27.5T612-652q-11 11-28 11t-28-11l-36-35v204q0 32 12 61t35 52l165 166q11 11 11.5 27.5T732-148q-11 11-28 11t-28-11L480-344Z"/>
    </Icon>
  );
});

IconMaterialMergeFilled.displayName = 'OnesyIconMaterialMergeFilled';

export default IconMaterialMergeFilled;
