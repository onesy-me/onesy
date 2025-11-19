import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalRule = (props: IIcon) => {

  return (
    <Icon
      name='HorizontalRule'

      short_name='HorizontalRule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-440v-80h640v80H160Z"/>
    </Icon>
  );
};

IconMaterialHorizontalRule.displayName = 'OnesyIconMaterialHorizontalRule';

export default IconMaterialHorizontalRule;
