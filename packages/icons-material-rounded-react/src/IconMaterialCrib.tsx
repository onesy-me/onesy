import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrib = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crib'

      short_name='Crib'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-69 0-132.5-23T230-168q-14-11-15-28t11-29q12-12 28.5-12.5T285-227q8 7 17 13t18 11v-117h-80q-33 0-56.5-23.5T160-400v-240q0-66 47-113t113-47h120q17 0 28.5 11.5T480-760v160h240q33 0 56.5 23.5T800-520v120q0 33-23.5 56.5T720-320h-80v117q10-6 19-12t18-13q13-11 29.5-10t27.5 12q12 12 11.5 28.5T732-170q-54 43-118.5 66.5T480-80Zm0-80q20 0 40-2.5t40-7.5v-150H400v150q20 5 40 7.5t40 2.5ZM240-400h480v-120H400v-200h-80q-33 0-56.5 23.5T240-640v240Zm160-120Z"/>
    </Icon>
  );
});

IconMaterialCrib.displayName = 'OnesyIconMaterialCrib';

export default IconMaterialCrib;
