import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CutFilled'

      short_name='Cut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-400-94 94q8 15 11 32t3 34q0 66-47 113T240-80q-66 0-113-47T80-240q0-66 47-113t113-47q17 0 34 3t32 11l94-94-94-94q-15 8-32 11t-34 3q-66 0-113-47T80-720q0-66 47-113t113-47q66 0 113 47t47 113q0 17-3 34t-11 32l438 438q27 27 12 61.5T783-120q-11 0-21.5-4.5T743-137L480-400Zm120-120-80-80 223-223q8-8 18.5-12.5T783-840q38 0 52.5 35T823-743L600-520ZM240-640q33 0 56.5-23.5T320-720q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720q0 33 23.5 56.5T240-640Zm240 180q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM240-160q33 0 56.5-23.5T320-240q0-33-23.5-56.5T240-320q-33 0-56.5 23.5T160-240q0 33 23.5 56.5T240-160Z"/>
    </Icon>
  );
});

IconMaterialCutFilled.displayName = 'OnesyIconMaterialCutFilled';

export default IconMaterialCutFilled;
