import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConcierge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Concierge'

      short_name='Concierge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80q-17 0-28.5-11.5T400-120q0-17 11.5-28.5T440-160h440q17 0 28.5 11.5T920-120q0 17-11.5 28.5T880-80H440Zm0-120q0-81 51-141.5T620-416v-25q0-17 11.5-28.5T660-481q17 0 28.5 11.5T700-441v25q77 14 128.5 74.5T880-200H440Zm105-81h228q-19-27-48.5-43.5T660-341q-36 0-66 16.5T545-281Zm114 0ZM40-520v-280q0-33 23.5-56.5T120-880h80q24 0 48 17t32 41l257-72q11-3 23-3t23 4l269 84q13 4 20.5 14.5T880-771v11q0 50-35 85t-85 35h-80v24q0 25-14.5 45.5T628-541l-256 96q-7 2-13.5 3.5T344-440H120q-33 0-56.5-23.5T40-520Zm80-140v140h80v-280h-80v140Zm160 30v110h64l232-85q11-4 17.5-13.5T600-640h-71l-79 26q-16 5-30.5-2.5T400-641q-5-16 2-30t23-19l88-30h247q9 0 22.5-6.5T796-742l-238-74-278 76v110Z"/>
    </Icon>
  );
});

IconMaterialConcierge.displayName = 'OnesyIconMaterialConcierge';

export default IconMaterialConcierge;
