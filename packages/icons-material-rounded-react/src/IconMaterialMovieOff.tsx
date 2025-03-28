import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieOff'

      short_name='MovieOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l240 240H160v320h560l80 80H160Zm711-44-71-71v-285H514L274-800h69l66 131q7 14 20 21.5t28 7.5q30 0 45.5-25t1.5-52l-41-83h97l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h120q33 0 56.5 23.5T880-720v480q0 10-2 19t-7 17ZM763-84 83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM446-400Zm211-18Z"/>
    </Icon>
  );
});

IconMaterialMovieOff.displayName = 'OnesyIconMaterialMovieOff';

export default IconMaterialMovieOff;
