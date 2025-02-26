import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResetImageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetImageW100'

      short_name='ResetImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-560v-176h28v128q37-80 111.5-130T480-788q107 0 189 64.5T777-560h-29q-26-88-99-144t-169-56q-88 0-157 48T222-588h126v28H172Zm146 294h332L548-402 448-278l-64-74-66 86ZM172-132v-316h28v288h560v-288h28v316H172Z"/>
    </Icon>
  );
});

IconMaterialResetImageW100.displayName = 'OnesyIconMaterialResetImageW100';

export default IconMaterialResetImageW100;
