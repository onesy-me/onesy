import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPoolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PoolW100'

      short_name='Pool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-148v-30q29-5 47.5-20.5T216-214q44 0 67 20t65 20q42 0 65-20t67-20q44 0 68 20t66 20q42 0 64-20t66-20q44 0 62.5 15.5T854-178v30q-29-6-50.5-22T744-186q-38 0-60 20t-70 20q-48 0-72-20t-62-20q-38 0-61 20t-71 20q-48 0-71-20t-61-20q-38 0-59.5 16T106-148Zm0-180v-30q29-5 47.5-20.5T216-394q44 0 67 20t65 20q42 0 65-20t67-20q44 0 67 20t65 20q42 0 65-20t67-20q44 0 62.5 15.5T854-358v30q-29-6-50.5-22T744-366q-38 0-60 20t-70 20q-48 0-72-20t-62-20q-38 0-61 20t-71 20q-48 0-71-20t-61-20q-38 0-59.5 16T106-328Zm548-476q33 0 56.5 23.5T734-724q0 33-23.5 56.5T654-644q-33 0-56.5-23.5T574-724q0-33 23.5-56.5T654-804ZM347-506q-8 0-14-2.5t-11-7.5l128-128-68-68-146-60v-42l176 72 226 226q-5 5-11 7.5t-14 2.5q-24 0-51.5-20T480-546q-54 0-81.5 20T347-506Z"/>
    </Icon>
  );
});

IconMaterialPoolW100.displayName = 'OnesyIconMaterialPoolW100';

export default IconMaterialPoolW100;
