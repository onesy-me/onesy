import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackgroundReplaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundReplaceW100'

      short_name='BackgroundReplace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-605v-40l183-183h40L172-605Zm0-153v-40l30-30h40l-70 70Zm415 44q-6-4-12.5-8t-12.5-7l99-99h40L587-714ZM172-339l139-139 7 14q3 6 7 11l-75 75q-16 5-36 15t-42 24Zm483-291q0-1 0 0-2-5-5.5-13t-7.5-13l146-146v39L655-630ZM418-738l90-90h40l-80 80q-11 1-25 4t-25 6ZM172-452v-40l130-130q-4 13-6.5 25.5T293-573L172-452Zm538 74q-7-3-13.5-5.5T682-390l106-106v40l-78 78Zm-69-84q5-8 8.5-15.5T656-493q4-9 6-18t4-17l122-122v41L641-462Zm-161 10q-45 0-76.5-31.5T372-560q0-45 31.5-76.5T480-668q45 0 76.5 31.5T588-560q0 45-31.5 76.5T480-452Zm0-28q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480ZM212-202v-22q0-26 14.5-43.5T262-296q48-23 103.5-37.5T480-348q59 0 114.5 14.5T698-296q20 10 35 28.5t15 43.5v22q0 13-8.5 21.5T718-172H242q-13 0-21.5-8.5T212-202Zm28 2h480q0-31-7-46.5T684-272q-38-18-89-33t-115-15q-64 0-115 15t-89 33q-21 10-28.5 25.5T240-200Zm240 0Zm0-360Z"/>
    </Icon>
  );
});

IconMaterialBackgroundReplaceW100.displayName = 'OnesyIconMaterialBackgroundReplaceW100';

export default IconMaterialBackgroundReplaceW100;
