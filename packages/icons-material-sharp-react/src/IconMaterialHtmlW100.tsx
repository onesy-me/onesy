import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHtmlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HtmlW100'

      short_name='Html'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M8-376v-208h28v80h112v-80h28v208h-28v-100H36v100H8Zm310 0v-180h-80v-28h188v28h-80v180h-28Zm170 0v-208h228v208h-28v-180h-72v140h-28v-140h-72v180h-28Zm324 0v-208h28v180h112v28H812Z"/>
    </Icon>
  );
});

IconMaterialHtmlW100.displayName = 'OnesyIconMaterialHtmlW100';

export default IconMaterialHtmlW100;
