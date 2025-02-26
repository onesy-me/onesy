import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelImportantW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantW100'

      short_name='LabelImportant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m172-252 146-228-146-228h455l161 228-164 228H172Zm50-28h389l143-200-143-200H222l130 200-130 200Zm130-200L222-680l130 200-130 200 130-200Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantW100.displayName = 'OnesyIconMaterialLabelImportantW100';

export default IconMaterialLabelImportantW100;
