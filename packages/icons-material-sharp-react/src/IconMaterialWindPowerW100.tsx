import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindPowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindPowerW100'

      short_name='WindPower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M450-92v-28h56v-244q-20-4-34.5-16T449-410l-119 74-221-63v-69h339q8-18 23-31t35-17.41V-668l168-158 59 37-172 284q21 11 31 38.5t1 51.5l140 35 111 201-48 44-241-237q-5 3-10 5t-11 3v244h56v28H450ZM212-760v-28h188v28H212Zm322 104v140l161-263.93L677-790 534-656ZM92-600v-28h148v28H92Zm427.82 210q21.18 0 35.68-14.32 14.5-14.33 14.5-35.5 0-21.18-14.32-35.68-14.33-14.5-35.5-14.5-21.18 0-35.68 14.32-14.5 14.33-14.5 35.5 0 21.18 14.32 35.68 14.33 14.5 35.5 14.5ZM324-366l119-74H137v20l187 54Zm390 10-136-34 215 217 15-14.76L714-356ZM172-172v-28h148v28H172Zm348-268Zm14-76Zm-91 76Zm135 50Z"/>
    </Icon>
  );
});

IconMaterialWindPowerW100.displayName = 'OnesyIconMaterialWindPowerW100';

export default IconMaterialWindPowerW100;
