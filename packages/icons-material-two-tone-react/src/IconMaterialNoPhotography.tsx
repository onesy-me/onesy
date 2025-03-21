import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoPhotography = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotography'

      short_name='NoPhotography'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M10.94,8.12L8.9,6.07L9.88,5h4.24l1.83,2H20v10.17l-3.12-3.12 C16.96,13.71,17,13.36,17,13c0-2.76-2.24-5-5-5C11.64,8,11.29,8.04,10.94,8.12z M12,18c-2.76,0-5-2.24-5-5 c0-0.91,0.25-1.76,0.68-2.49L4.17,7H4v12h12.17l-1.68-1.68C13.76,17.75,12.91,18,12,18z" enableBackground="new" opacity=".3"/><path d="M8.9,6.07L7.48,4.66L9,3h6l1.83,2H20c1.1,0,2,0.9,2,2v12c0,0.05-0.01,0.1-0.02,0.16L20,17.17V7h-4.05l-1.83-2H9.88 L8.9,6.07z M20.49,23.31L18.17,21H4c-1.1,0-2-0.9-2-2V7c0-0.59,0.27-1.12,0.68-1.49l-2-2L2.1,2.1L7,7l2.01,2.01l1.43,1.43l4.1,4.1 l1.43,1.43L19,19l1.82,1.82l1.08,1.08L20.49,23.31z M9.19,12.02C9.08,12.33,9,12.65,9,13c0,1.65,1.35,3,3,3 c0.35,0,0.67-0.08,0.98-0.19L9.19,12.02z M16.17,19l-1.68-1.68C13.76,17.75,12.91,18,12,18c-2.76,0-5-2.24-5-5 c0-0.91,0.25-1.76,0.68-2.49L4.17,7H4v12H16.17z M14.81,11.98l2.08,2.08C16.96,13.71,17,13.36,17,13c0-2.76-2.24-5-5-5 c-0.36,0-0.71,0.04-1.06,0.12l2.08,2.08C13.85,10.5,14.5,11.15,14.81,11.98z"/></g>
    </Icon>
  );
});

IconMaterialNoPhotography.displayName = 'OnesyIconMaterialNoPhotography';

export default IconMaterialNoPhotography;
