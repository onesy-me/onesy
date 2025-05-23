import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTonalityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TonalityW100'

      short_name='Tonality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM466-160v-640q-128 17-217 105.5T160-480q0 126 89 214.5T466-160Zm28 0q50-2 96.5-17.5T674-226H494v66Zm0-94h212q21-20 37-43t27-49H494v92Zm0-120h288q8-23 12-46t6-46H494v92Zm0-120h306q-2-23-6-46t-12-46H494v92Zm0-120h276q-11-26-27-49t-37-43H494v92Zm0-120h180q-37-33-83.5-48.5T494-800v66Z"/>
    </Icon>
  );
});

IconMaterialTonalityW100.displayName = 'OnesyIconMaterialTonalityW100';

export default IconMaterialTonalityW100;
