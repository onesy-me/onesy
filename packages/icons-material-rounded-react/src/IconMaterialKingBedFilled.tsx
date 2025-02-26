import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKingBedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBedFilled'

      short_name='KingBed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-481q0-33 23.5-56t56.5-23v-120q0-33 23.5-56.5T240-760h480q33 0 56.5 23.5T800-680v120q33 0 56.5 23.5T880-480v146q0 23-15.5 38.5T826-280l-22 67q-2 6-7 9.5t-11 3.5h-12q-6 0-11-3.5t-7-9.5l-22-67H226l-22 67q-2 6-7 9.5t-11 3.5h-12q-6 0-11-3.5t-7-9.5l-22-67q-23 0-38.5-15.5T80-334v-147Zm440-79h200v-120H520v120Zm-280 0h200v-120H240v120Z"/>
    </Icon>
  );
});

IconMaterialKingBedFilled.displayName = 'OnesyIconMaterialKingBedFilled';

export default IconMaterialKingBedFilled;
