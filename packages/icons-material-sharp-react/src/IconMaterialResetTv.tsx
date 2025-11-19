import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResetTv = (props: IIcon) => {

  return (
    <Icon
      name='ResetTv'

      short_name='ResetTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-80H80v-640h800v200h-80v-120H160v480h640v-200H512l74 74-56 56-170-170 170-170 56 56-74 74h368v360H640v80H320Zm200-400Z"/>
    </Icon>
  );
};

IconMaterialResetTv.displayName = 'OnesyIconMaterialResetTv';

export default IconMaterialResetTv;
