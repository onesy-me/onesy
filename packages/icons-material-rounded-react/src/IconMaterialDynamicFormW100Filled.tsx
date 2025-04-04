import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDynamicFormW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormW100Filled'

      short_name='DynamicForm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M166-520q-24.75 0-42.37-17.63Q106-555.25 106-580v-134q0-24.75 17.63-42.38Q141.25-774 166-774h324q12.75 0 21.38 8.62Q520-756.75 520-744v194q0 12.75-8.62 21.37Q502.75-520 490-520H166Zm0 334q-24.75 0-42.37-17.63Q106-221.25 106-246v-134q0-24.75 17.63-42.38Q141.25-440 166-440h404q12.75 0 21.38 8.62Q600-422.75 600-410v194q0 12.75-8.62 21.37Q582.75-186 570-186H166Zm514-334h-50q-12.75 0-21.37-8.63Q600-537.25 600-550v-194q0-12.75 8.63-21.38Q617.25-774 630-774h168q15.87 0 24.93 13 9.07 13 3.07 28l-64 165h33q16 0 25 13.5t3 28.5L709-196q-2.25 6.15-7.12 8.08Q697-186 692-187q-5-1-8.5-5t-3.5-10v-318ZM263-647q0-13-8.5-21.5T233-677q-13 0-21.5 8.5T203-647q0 13 8.5 21.5T233-617q13 0 21.5-8.5T263-647Zm-30 364q13 0 21.5-8.5T263-313q0-13-8.5-21.5T233-343q-13 0-21.5 8.5T203-313q0 13 8.5 21.5T233-283Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormW100Filled.displayName = 'OnesyIconMaterialDynamicFormW100Filled';

export default IconMaterialDynamicFormW100Filled;
