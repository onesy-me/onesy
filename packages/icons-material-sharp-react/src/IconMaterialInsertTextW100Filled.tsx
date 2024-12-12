import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsertTextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertTextW100Filled'

      short_name='InsertText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-320v-292H346v-28h268v28H494v292h-28ZM112-112v-148h60v-440h-60v-148h148v60h440v-60h148v148h-60v440h60v148H700v-60H260v60H112Zm148-88h440v-60h60v-440h-60v-60H260v60h-60v440h60v60Z"/>
    </Icon>
  );
});

IconMaterialInsertTextW100Filled.displayName = 'OnesyIconMaterialInsertTextW100Filled';

export default IconMaterialInsertTextW100Filled;
