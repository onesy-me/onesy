import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Start'

      short_name='Start'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240q-17 0-28.5-11.5T80-280v-400q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v400q0 17-11.5 28.5T120-240Zm607-200H280q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520h447L612-636q-11-11-11.5-27.5T612-692q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L668-268q-11 11-27.5 11T612-268q-12-12-12-28.5t12-28.5l115-115Z"/>
    </Icon>
  );
});

IconMaterialStart.displayName = 'OnesyIconMaterialStart';

export default IconMaterialStart;
