import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrameExclamationFilled = (props: IIcon) => {

  return (
    <Icon
      name='FrameExclamationFilled'

      short_name='FrameExclamation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-400v-360h80v360h-80Zm0 200v-80h80v80h-80ZM40-40v-200h80v120h120v80H40Zm680 0v-80h120v-120h80v200H720ZM40-720v-200h200v80H120v120H40Zm800 0v-120H720v-80h200v200h-80Z"/>
    </Icon>
  );
};

IconMaterialFrameExclamationFilled.displayName = 'OnesyIconMaterialFrameExclamationFilled';

export default IconMaterialFrameExclamationFilled;
