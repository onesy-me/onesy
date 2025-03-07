import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHotTub = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotTub'

      short_name='HotTub'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-640q-33 0-56.5-23.5T200-720q0-33 23.5-56.5T280-800q33 0 56.5 23.5T360-720q0 33-23.5 56.5T280-640ZM160-80q-33 0-56.5-23.5T80-160v-280q0-17 11.5-28.5T120-480h80v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q7 8 15 15t17 13h394q17 0 28.5 11.5T880-440v280q0 33-23.5 56.5T800-80H160Zm601-480q-16 0-26.5-11t-9.5-27q1-22-7.5-41.5T694-674q-26-26-38.5-59T642-801q0-16 10.5-27.5T679-840q16 0 27 11.5t10 27.5q-1 20 6.5 39.5T744-728q26 26 39.5 59t14.5 69q0 17-10.5 28.5T761-560Zm-160 0q-16 0-26.5-11t-9.5-27q1-22-7.5-41.5T534-674q-26-26-38.5-59T482-801q0-16 10.5-27.5T519-840q16 0 26.5 11t9.5 27q-1 21 6.5 40t22.5 34q26 26 39.5 59t14.5 69q0 17-10.5 28.5T601-560Zm79 400h80v-240h-80v240Zm-160 0h80v-240h-80v240Zm-160 0h80v-240h-80v240Zm-160 0h80v-240h-80v240Z"/>
    </Icon>
  );
});

IconMaterialHotTub.displayName = 'OnesyIconMaterialHotTub';

export default IconMaterialHotTub;
