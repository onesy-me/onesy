import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHideImageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageW100'

      short_name='HideImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-728v418q0 7-4.5 10.5T774-296q-5 0-9.5-3.5T760-310v-418q0-12-10-22t-22-10H309q-7 0-10.5-4.5T295-774q0-5 3.5-9.5T309-788h419q26 0 43 17t17 43ZM232-172q-26 0-43-17t-17-43v-516l-70-70q-4-4-4.5-9.5T102-838q5-5 10-5t10 5l716 716q4 4 4.5 9.5T838-102q-5 5-10 5t-10-5l-70-70H232Zm382-134H348q-9 0-13-8t2-16l36-47q5-6 11.5-6t11.5 5l52 60 69-85-317-317v488q0 12 10 22t22 10h488L614-306Zm-77-231Zm-77 77Z"/>
    </Icon>
  );
});

IconMaterialHideImageW100.displayName = 'OnesyIconMaterialHideImageW100';

export default IconMaterialHideImageW100;
