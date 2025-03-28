import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFace2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face2W100Filled'

      short_name='Face2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-92q-21 0-44.5-3.5T376-107q-70 60-162.5 50T79-140q-37-63-22-134.5T133-394q-1-11-1-25.5V-445q-56-43-72-116t17-132q35-60 100.5-80.5T309-771q14-60 61.5-98.5T480-908q62 0 109.5 38.5T651-771q66-23 132-2.5T883-693q33 58 17 131t-72 117v25.5q0 14.5-1 25.5 61 48 76 119t-22 135q-42 73-134.5 83T584-107q-36 8-59.5 11.5T480-92Zm0-28q134 0 227-93t93-227q0-35-7-68t-21-63q-26 19-57.5 29.5T645-531q-91 0-155-64t-64-155v-6q-114 20-190 108.5T160-440q0 134 93 227t227 93ZM360-350q-21 0-35.5-14.5T310-400q0-21 14.5-35.5T360-450q21 0 35.5 14.5T410-400q0 21-14.5 35.5T360-350Zm240 0q-21 0-35.5-14.5T550-400q0-21 14.5-35.5T600-450q21 0 35.5 14.5T650-400q0 21-14.5 35.5T600-350Z"/>
    </Icon>
  );
});

IconMaterialFace2W100Filled.displayName = 'OnesyIconMaterialFace2W100Filled';

export default IconMaterialFace2W100Filled;
