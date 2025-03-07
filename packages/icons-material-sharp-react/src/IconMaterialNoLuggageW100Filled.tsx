import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoLuggageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageW100Filled'

      short_name='NoLuggage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M304-132v-40h-60v-504L90-830l20-20L872-88l-20 20-141-141v37h-55v40h-56v-40H360v40h-56Zm88-148h28v-220l-28-28v248Zm148 0h28v-72l-28-28v100Zm176-106L568-534v-58h-28v30L392-710v-118h176v128h148v314ZM420-700h120v-100H420v100Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageW100Filled.displayName = 'OnesyIconMaterialNoLuggageW100Filled';

export default IconMaterialNoLuggageW100Filled;
