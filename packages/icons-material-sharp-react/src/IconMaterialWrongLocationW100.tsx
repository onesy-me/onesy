import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWrongLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationW100'

      short_name='WrongLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-130Q344-251 275-356t-69-190q0-120 79-201t195-81h10.09q4.91 0 9.91.67V-800q-5-.5-10-.75t-10-.25q-106 0-175.5 72.5T235-546q0 75 67 179t178 198q107-92 174-193.5T724-540h29q-3 84-72 187.5T480-130Zm0-368Zm150-152 84-84 84 84 20-20-84-84 84-84-20-20-84 84-84-84-20 20 84 84-84 84 20 20ZM480.18-494q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5Z"/>
    </Icon>
  );
});

IconMaterialWrongLocationW100.displayName = 'OnesyIconMaterialWrongLocationW100';

export default IconMaterialWrongLocationW100;
