import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutletW100'

      short_name='Outlet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360.04-486q5.96 0 9.96-4.02 4-4.03 4-9.98v-120q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v120q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM456-286h48q12.75 0 21.38-8.63Q534-303.25 534-316v-24q0-23-15.5-38.5T480-394q-23 0-38.5 15.5T426-340v24q0 12.75 8.63 21.37Q443.25-286 456-286Zm144.04-200q5.96 0 9.96-4.02 4-4.03 4-9.98v-120q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v120q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialOutletW100.displayName = 'OnesyIconMaterialOutletW100';

export default IconMaterialOutletW100;
