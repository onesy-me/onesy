import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperBoardFilled = (props: IIcon) => {

  return (
    <Icon
      name='DeveloperBoardFilled'

      short_name='DeveloperBoard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-720h720v160h80v80h-80v80h80v80h-80v80h80v80h-80v160H80Zm160-160h200v-160H240v160Zm240-280h160v-120H480v120Zm-240 80h200v-200H240v200Zm240 200h160v-240H480v240Z"/>
    </Icon>
  );
};

IconMaterialDeveloperBoardFilled.displayName = 'OnesyIconMaterialDeveloperBoardFilled';

export default IconMaterialDeveloperBoardFilled;
