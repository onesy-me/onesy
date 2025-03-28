import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDynamicFormW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormW100'

      short_name='DynamicForm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M166-520q-24.75 0-42.37-17.63Q106-555.25 106-580v-134q0-24.75 17.63-42.38Q141.25-774 166-774h324q12.75 0 21.38 8.62Q520-756.75 520-744v194q0 12.75-8.62 21.37Q502.75-520 490-520H166Zm0-28h326v-198H166q-14 0-23 9t-9 23v134q0 14 9 23t23 9Zm0 362q-24.75 0-42.37-17.63Q106-221.25 106-246v-134q0-24.75 17.63-42.38Q141.25-440 166-440h404q12.75 0 21.38 8.62Q600-422.75 600-410v194q0 12.75-8.62 21.37Q582.75-186 570-186H166Zm0-28h406v-198H166q-14 0-23 9t-9 23v134q0 14 9 23t23 9Zm514-306h-50q-12.75 0-21.37-8.63Q600-537.25 600-550v-194q0-12.75 8.63-21.38Q617.25-774 630-774h168q15.87 0 24.93 13 9.07 13 3.07 28l-64 165h33q16 0 25 13.5t3 28.5L709-196q-2.4 5.71-7.2 7.86Q697-186 692-187q-5-1-8.5-4.89-3.5-3.89-3.5-10.11v-318Zm-546-28v-198 198Zm0 334v-198 198Zm129-433q0-13-8.5-21.5T233-677q-13 0-21.5 8.5T203-647q0 13 8.5 21.5T233-617q13 0 21.5-8.5T263-647Zm-30 364q13 0 21.5-8.5T263-313q0-13-8.5-21.5T233-343q-13 0-21.5 8.5T203-313q0 13 8.5 21.5T233-283Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormW100.displayName = 'OnesyIconMaterialDynamicFormW100';

export default IconMaterialDynamicFormW100;
