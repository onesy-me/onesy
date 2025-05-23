import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLuggageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LuggageW100'

      short_name='Luggage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M304-172h-60v-528h148v-128h176v128h148v528h-60v12q0 11-8.5 19.5T628-132q-11 0-19.5-8.5T600-160v-12H360v12q0 11-8.5 19.5T332-132q-11 0-19.5-8.5T304-160v-12Zm-32-28h416v-472H272v472Zm120-80h28v-312h-28v312Zm148 0h28v-312h-28v312ZM420-700h120v-100H420v100Zm60 264Z"/>
    </Icon>
  );
});

IconMaterialLuggageW100.displayName = 'OnesyIconMaterialLuggageW100';

export default IconMaterialLuggageW100;
