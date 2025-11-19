import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStepOut = (props: IIcon) => {

  return (
    <Icon
      name='StepOut'

      short_name='StepOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-40-320v-327L336-624l-56-56 200-200 200 200-57 56-103-103v327h-80Z"/>
    </Icon>
  );
};

IconMaterialStepOut.displayName = 'OnesyIconMaterialStepOut';

export default IconMaterialStepOut;
