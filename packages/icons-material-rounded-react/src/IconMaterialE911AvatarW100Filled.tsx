import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialE911AvatarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911AvatarW100Filled'

      short_name='E911Avatar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M679.96-640q-5.96 0-9.96-4.03-4-4.02-4-9.97v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v160q0 5.95-4.04 9.97-4.03 4.03-10 4.03Zm.04 120q-8.5 0-14.25-5.75T660-540q0-8.5 5.75-14.25T680-560q8.5 0 14.25 5.75T700-540q0 8.5-5.75 14.25T680-520Zm65 348q-94 0-195.5-49.5T359.5-360q-88.5-89-138-190T172-745q0-18.43 12-30.71Q196-788 214-788h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.29 30-12.28 12-30.71 12Z"/>
    </Icon>
  );
});

IconMaterialE911AvatarW100Filled.displayName = 'OnesyIconMaterialE911AvatarW100Filled';

export default IconMaterialE911AvatarW100Filled;
