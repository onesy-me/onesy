import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoLuggageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageW100'

      short_name='NoLuggage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m716-386-28-28v-258H430l-38-38v-118h176v128h148v314ZM568-592v58l-28-28v-30h28ZM420-700h120v-100H420v100ZM244-172v-524l28 28v468h416v-52l28 28v52h-60v40h-56v-40H360v40h-56v-40h-60Zm148-108v-268l28 28v240h-28Zm148-120 28 28v92h-28v-120ZM852-68 90-830l20-20L872-88l-20 20ZM559-543Zm-79 103Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageW100.displayName = 'OnesyIconMaterialNoLuggageW100';

export default IconMaterialNoLuggageW100;
