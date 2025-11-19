import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalRuleFilled = (props: IIcon) => {

  return (
    <Icon
      name='HorizontalRuleFilled'

      short_name='HorizontalRule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-440q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h560q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H200Z"/>
    </Icon>
  );
};

IconMaterialHorizontalRuleFilled.displayName = 'OnesyIconMaterialHorizontalRuleFilled';

export default IconMaterialHorizontalRuleFilled;
