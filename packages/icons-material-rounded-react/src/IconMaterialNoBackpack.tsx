import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoBackpack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpack'

      short_name='NoBackpack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-880q17 0 28.5 11.5T680-840v46q52 14 86 56t34 98v287q0 17-11.5 28.5T760-313q-17 0-28.5-11.5T720-353v-287q0-33-23.5-56.5T640-720H353l-50-51q-11-11-17-25.5t-6-30.5v-13q0-17 11.5-28.5T320-880h40q17 0 28.5 11.5T400-840v40h160v-40q0-17 11.5-28.5T600-880h40ZM480-480l79 80H340q-17 0-28.5-11.5T300-440q0-17 11.5-28.5T340-480h140Zm62-51Zm-80 146ZM207-753l56 56q-11 11-17 25.5t-6 31.5v480h480v-79l80 79q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-480q0-33 12.5-62t34.5-51ZM763-84 84-763q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l678 679q11 11 11.5 27.5T819-84q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialNoBackpack.displayName = 'OnesyIconMaterialNoBackpack';

export default IconMaterialNoBackpack;
