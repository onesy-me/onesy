import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalRuleFilled = (props: IIcon) => {

  return (
    <Icon
      name='HorizontalRuleFilled'

      short_name='HorizontalRule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-440v-80h640v80H160Z"/>
    </Icon>
  );
};

IconMaterialHorizontalRuleFilled.displayName = 'OnesyIconMaterialHorizontalRuleFilled';

export default IconMaterialHorizontalRuleFilled;
