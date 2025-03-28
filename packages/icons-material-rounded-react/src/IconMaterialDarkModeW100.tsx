import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDarkModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeW100'

      short_name='DarkMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M483-172q-128 0-218-90t-90-218q0-87 46.5-164T361-763q12-5 21-4t15 6q6 5 8 13.5t-1 18.5q-5 17-7 33.76-2 16.75-2 35.24 0 111.67 78.17 189.83Q551.33-392 663-392q27 0 48-5t35-5q8 0 14 2.5t8.84 7.5q3.16 5 3.66 11.5T769-366q-33 86-110.5 140T483-172Zm0-28q88 0 158-48.5T743-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T367-660q0-20 3-40t8-40q-78 32-126.5 102T203-480q0 116 82 198t198 82Zm-10-270Z"/>
    </Icon>
  );
});

IconMaterialDarkModeW100.displayName = 'OnesyIconMaterialDarkModeW100';

export default IconMaterialDarkModeW100;
