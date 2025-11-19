import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGateFilled = (props: IIcon) => {

  return (
    <Icon
      name='GateFilled'

      short_name='Gate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-400q0-66 47-113t113-47h80v240h-80v80h80v240H200Zm320 0v-240h80v-80h-80v-240h80q66 0 113 47t47 113v400H520ZM80-280v-400h80v400H80Zm720 0v-400h80v400h-80Z"/>
    </Icon>
  );
};

IconMaterialGateFilled.displayName = 'OnesyIconMaterialGateFilled';

export default IconMaterialGateFilled;
