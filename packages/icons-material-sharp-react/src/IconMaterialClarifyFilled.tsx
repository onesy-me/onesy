import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClarifyFilled = (props: IIcon) => {

  return (
    <Icon
      name='ClarifyFilled'

      short_name='Clarify'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h280v-80H240v80Zm400 0h80v-400h-80v400ZM240-440h280v-80H240v80Zm0-160h280v-80H240v80ZM80-120v-720h800v720H80Z"/>
    </Icon>
  );
};

IconMaterialClarifyFilled.displayName = 'OnesyIconMaterialClarifyFilled';

export default IconMaterialClarifyFilled;
