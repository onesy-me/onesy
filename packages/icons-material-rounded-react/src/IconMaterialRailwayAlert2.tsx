import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRailwayAlert2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RailwayAlert2'

      short_name='RailwayAlert2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M128-80q-14 0-19-12t5-22l46-46h480l46 46q10 10 5 22t-19 12H128Zm72-120 40-40h-20q-58 0-99-41t-41-99v-260q0-129 92.5-204.5T400-920q11 0 20.5.5T441-918q19 2 27.5 15.5T475-874q-2 15-13.5 26t-32.5 9q-8-1-14.5-1H400q-39 0-78 9.5T249-800h124q20 0 30 12.5t10 27.5q0 15-10.5 27.5T372-720H177q-8 18-12.5 37.5T160-640v40h227q20 0 30 12.5t10 27.5q0 15-10 27.5T387-520H160v140q0 25 17.5 42.5T220-320h360q25 0 42.5-17.5T640-380v-20q0-17 11.5-28.5T680-440q17 0 28.5 11.5T720-400v20q0 58-41 99t-99 41h-20l40 40H200Zm200-160q25 0 42.5-17.5T460-420q0-25-17.5-42.5T400-480q-25 0-42.5 17.5T340-420q0 25 17.5 42.5T400-360Zm280-120q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm0-160q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-280 40Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialRailwayAlert2.displayName = 'OnesyIconMaterialRailwayAlert2';

export default IconMaterialRailwayAlert2;
