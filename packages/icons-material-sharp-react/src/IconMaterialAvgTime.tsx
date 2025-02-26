import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAvgTime = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgTime'

      short_name='AvgTime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440h80q0 116 82 198t198 82q116 0 198-82t82-198h80q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80ZM120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119h-80q0-116-82-198t-198-82q-116 0-198 82t-82 198h-80Zm240-400v-80h240v80H360Zm120 120q-106 0-184 69t-93 171h142l52 96 163-286 104 190h93q-15-102-93-171t-184-69Zm0 560q106 0 184-69t93-171H615l-52-96-163 286-104-190h-93q15 102 93 171t184 69Zm0 0q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialAvgTime.displayName = 'OnesyIconMaterialAvgTime';

export default IconMaterialAvgTime;
