import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiFindW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiFindW100Filled'

      short_name='WifiFind'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M459-215 99-575q-5-5-7.5-11.5T90-599q1-6 4-12t8-10q85-63 178.5-95T480-748q106 0 199.5 32T858-621q5 4 8 10t4 12q1 6-1 12.5t-7 11.5l-44 45q-25-25-59-41.5T680-588q-78 0-133 55t-55 133q0 44 16.5 78.5T549-264l-48 48q-5 5-10 7t-11 2q-6 0-11-1.5t-10-6.5Zm384-6-95-95q-13 11-31 17.5t-37 6.5q-45 0-76.5-31.5T572-400q0-45 31.5-76.5T680-508q45 0 76.5 31.5T788-400q0 17-5.5 34T768-336l95 95q4 4 4.5 9.5T863-221q-5 5-10 5t-10-5Zm-163-99q33 0 56.5-23.5T760-400q0-33-23.5-56.5T680-480q-33 0-56.5 23.5T600-400q0 33 23.5 56.5T680-320Z"/>
    </Icon>
  );
});

IconMaterialWifiFindW100Filled.displayName = 'OnesyIconMaterialWifiFindW100Filled';

export default IconMaterialWifiFindW100Filled;
