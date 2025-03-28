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
      <path d="M203-480h117q11 0 21 5.5t15 16.5l44 88 124-248q11-23 36-23t36 23l69 138h92q-15-102-93-171t-184-69q-106 0-184 69t-93 171Zm277 320q106 0 184-69t93-171H640q-11 0-21-5.5T604-422l-44-88-124 248q-11 23-36 23t-36-23l-69-138h-92q15 102 93 171t184 69Zm0 80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440h80q0 116 82 198t198 82q116 0 198-82t82-198h80q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80ZM120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l28-28q11-11 28-11t28 11q11 11 11 28t-11 28l-28 28q38 50 58 107t20 119h-80q0-116-82-198t-198-82q-116 0-198 82t-82 198h-80Zm280-400q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm80 680q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialAvgTime.displayName = 'OnesyIconMaterialAvgTime';

export default IconMaterialAvgTime;
