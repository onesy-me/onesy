import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFace6W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face6W100Filled'

      short_name='Face6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-72 27.5-135.5t74.5-111Q281-774 344.5-801T480-828q72 0 135.5 27t111 74.5Q774-679 801-615.5T828-480q0 72-27 135.5T726.5-234q-47.5 47-111 74.5T480-132Zm0-28q134 0 227-93.5T800-480v-14.5q0-6.5-1-13.5-55-4-91-40t-59-82q-9-17-24-26.5t-34-9.5H370q-20 0-35 9.5T311-630q-23 47-59 83t-91 40q-1 7-1 13.5v13.5q0 133 93.5 226.5T480-160ZM360-390q-21 0-35.5-14.5T310-440q0-21 14.5-35.5T360-490q21 0 35.5 14.5T410-440q0 21-14.5 35.5T360-390Zm240 0q-21 0-35.5-14.5T550-440q0-21 14.5-35.5T600-490q21 0 35.5 14.5T650-440q0 21-14.5 35.5T600-390Z"/>
    </Icon>
  );
});

IconMaterialFace6W100Filled.displayName = 'OnesyIconMaterialFace6W100Filled';

export default IconMaterialFace6W100Filled;
