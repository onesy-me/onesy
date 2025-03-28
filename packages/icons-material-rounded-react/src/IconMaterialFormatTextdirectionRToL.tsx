import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextdirectionRToL = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextdirectionRToL'

      short_name='FormatTextdirectionRToL'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-800v400q0 17-11.5 28.5T400-360q-17 0-28.5-11.5T360-400v-160q-66 0-113-47t-47-113q0-66 47-113t113-47h280q17 0 28.5 11.5T680-840q0 17-11.5 28.5T640-800h-40v400q0 17-11.5 28.5T560-360q-17 0-28.5-11.5T520-400v-400h-80ZM272-200l36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11L148-212q-12-12-12-28t12-28l104-104q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36h528q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H272Zm88-440v-160q-33 0-56.5 23.5T280-720q0 33 23.5 56.5T360-640Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialFormatTextdirectionRToL.displayName = 'OnesyIconMaterialFormatTextdirectionRToL';

export default IconMaterialFormatTextdirectionRToL;
