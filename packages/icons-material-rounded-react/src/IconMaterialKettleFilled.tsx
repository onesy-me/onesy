import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKettleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KettleFilled'

      short_name='Kettle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280v-440l-72-96q-15-20-4-42t36-22h431q37 0 63 26t26 63v31h80q33 0 56.5 23.5T880-680v200q0 33-23.5 56.5T800-400h-80v120q0 33-23.5 56.5T640-200H320q-33 0-56.5-23.5T240-280Zm480-200h80v-200h-80v200ZM540-760q-25 0-42.5 17.5T480-700v320q0 25 17.5 42.5T540-320q25 0 42.5-17.5T600-380v-320q0-25-17.5-42.5T540-760ZM160-80q-17 0-28.5-11.5T120-120q0-17 11.5-28.5T160-160h640q17 0 28.5 11.5T840-120q0 17-11.5 28.5T800-80H160Z"/>
    </Icon>
  );
});

IconMaterialKettleFilled.displayName = 'OnesyIconMaterialKettleFilled';

export default IconMaterialKettleFilled;
