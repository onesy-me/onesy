import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileCopyOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyOff'

      short_name='FileCopyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m623-897 194 194q11 11 17 25.5t6 30.5v317q0 20-12.5 29.5T800-291q-15 0-27.5-10T760-331v-309H620q-25 0-42.5-17.5T560-700v-140H280q-17 0-28.5-11.5T240-880q0-17 11.5-28.5T280-920h287q16 0 30.5 6t25.5 17ZM320-280h248L320-528v248Zm328 80H320q-33 0-56.5-23.5T240-280v-328L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11L648-200ZM540-577Zm-96 173ZM160-40q-33 0-56.5-23.5T80-120v-480q0-17 11.5-28.5T120-640q17 0 28.5 11.5T160-600v480h440q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40H160Z"/>
    </Icon>
  );
});

IconMaterialFileCopyOff.displayName = 'OnesyIconMaterialFileCopyOff';

export default IconMaterialFileCopyOff;
