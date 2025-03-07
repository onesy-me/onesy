import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnpublished = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unpublished'

      short_name='Unpublished'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q45 0 85.5-12t76.5-33L487-360l-35 35q-12 12-28.5 12T395-325L282-438q-11-11-11-28t11-28q11-11 28-11t28 11l86 86 7-8-226-226q-21 36-33 76.5T160-480q0 133 93.5 226.5T480-160Zm122-314-56-56 76-76q11-11 28-11t28 11q11 11 11 28t-11 28l-76 76ZM763-84l-63-62q-49 32-104.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-60 17-115.5T146-700l-63-63q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM480-800q-33 0-64.5 6.5T354-774q-16 7-32 2t-24-19q-8-14-3.5-30t19.5-23q39-18 80.5-27t85.5-9q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 44-9 85.5T844-314q-7 15-23 19.5t-30-3.5q-14-8-19-24t2-32q13-30 19.5-61.5T800-480q0-133-93.5-226.5T480-800Zm57 263ZM423-423Z"/>
    </Icon>
  );
});

IconMaterialUnpublished.displayName = 'OnesyIconMaterialUnpublished';

export default IconMaterialUnpublished;
