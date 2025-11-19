import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExitToAppFilled = (props: IIcon) => {

  return (
    <Icon
      name='ExitToAppFilled'

      short_name='ExitToApp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-240h80v160h560v-560H200v160h-80v-240h720v720H120Zm300-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z"/>
    </Icon>
  );
};

IconMaterialExitToAppFilled.displayName = 'OnesyIconMaterialExitToAppFilled';

export default IconMaterialExitToAppFilled;
