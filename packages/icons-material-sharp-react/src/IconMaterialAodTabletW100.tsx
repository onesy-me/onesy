import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAodTabletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTabletW100'

      short_name='AodTablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-212v-536h776v536H92Zm94-508h-66v480h66v-480Zm28 480h532v-480H214v480Zm560-480v480h66v-480h-66Zm0 0h66-66Zm-588 0h-66 66Zm160 204v-28h268v28H346Zm40 120v-28h188v28H386Z"/>
    </Icon>
  );
});

IconMaterialAodTabletW100.displayName = 'OnesyIconMaterialAodTabletW100';

export default IconMaterialAodTabletW100;
