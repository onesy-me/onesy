import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsertTextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertTextW100'

      short_name='InsertText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-320v-292H346v-28h268v28H494v292h-28ZM112-112v-148h60v-440h-60v-148h148v60h440v-60h148v148h-60v440h60v148H700v-60H260v60H112Zm148-88h440v-60h60v-440h-60v-60H260v60h-60v440h60v60ZM140-728h92v-92h-92v92Zm588 0h92v-92h-92v92Zm0 588h92v-92h-92v92Zm-588 0h92v-92h-92v92Zm92-588Zm496 0Zm0 496Zm-496 0Z"/>
    </Icon>
  );
});

IconMaterialInsertTextW100.displayName = 'OnesyIconMaterialInsertTextW100';

export default IconMaterialInsertTextW100;
